import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Autocomplete, Button, Checkbox, Dialog, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import List from '@mui/material/List'
import { FormEvent, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import SingleSidebarUserProfile from './SingleSidebarUserProfile'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { addAnotherConversationToConversationArray, changeSidebarViewAction, selectConversationAction } from '../redux/actions'
import { addAnotherContactToListOfContactsAction, addToListOfContactsAction } from '../redux/actions'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

interface IProps {
    view: 'users'| 'new-message' | 'empty-convo'
}

interface INewGroup {
    name: string,
    members: string[]
}

export default function SidebarUserProfiles({ view }: IProps) {

    const [email, setEmail] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const { axiosRequest } = useAxios()
    const dispatch = useDispatch()
    const contacts = useSelector((state: IReduxStore) => state.sidebar.contacts)
    const [contactNames, setContactNames] = useState<string[]>([])
    const [newGroup, setNewGroup] = useState<INewGroup>({
        name: '',
        members: []
    })

    const fetchPeople = async () => {
        if (contacts.length === 0) {
            const response = await axiosRequest('/users/me/contacts', 'GET')
            if (response.data) {
                dispatch(addToListOfContactsAction(response.data))
            }
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await axiosRequest('/users/contact', 'POST', { email })
        if (response.status === 200) {
            notifySuccess()
            setEmail('')
            dispatch(addAnotherContactToListOfContactsAction(response.data))
        }
        if (response.status === 404) {
            notifyError()
            setEmail('')
        }
    }

    const notifySuccess = () => toast.success('Successfully saved the contact!', {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })

    const notifyError = () => toast.error('This user does not exist.', {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    const handleCloseModal = () => {
        setOpenModal(false)
        setNewGroup({
            name: '',
            members: []
        })
    }

    const handleAddGroupForm = async (e: FormEvent) => {
        e.preventDefault()
        let memberIds: string[] = []
        newGroup.members.forEach(member => contacts.filter(contact => (contact.username === member) && memberIds.push(contact._id)))
        const response = await axiosRequest('/conversations/newGroupConvo', 'POST', { name: newGroup.name, memberIds })
        if (response.status === 200) {
            dispatch(addAnotherConversationToConversationArray(response.data))
            dispatch(changeSidebarViewAction('conversations'))
            dispatch(selectConversationAction(response.data))
            handleCloseModal()
        }
    }

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
    const checkedIcon = <CheckBoxIcon fontSize="small" />

    useEffect(() => {
        fetchPeople()
    }, [])

    useEffect(() => {
        const names = contacts.map(contact => contact.username)
        setContactNames(names)
    }, [contacts])

    if (view === 'empty-convo') return (
        <List className="sidebar-contacts" style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{  color: '#e1e1e1' }}>You Have No Conversations</Typography>
        </List>
    )

    return (
        <>
        <List className="sidebar-contacts">
            { view === 'new-message' && (
                <>
                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    size="small"
                    onClick={() => setOpenModal(true)}
                >
                    Create New Group
                </Button>
                <form autoComplete="off" onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                <TextField 
                    placeholder="Add New Contact"
                    variant="outlined" 
                    size="small" 
                    fullWidth 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    style={{ maxWidth: "90%", marginTop: "0rem", marginBottom: ".5rem" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <PersonAddAlt1Icon color="disabled" />
                            </InputAdornment>
                        )
                    }}
                />
                </form>
                <TextField 
                    placeholder="Search Contacts"
                    variant="outlined" 
                    size="small" 
                    fullWidth 
                    style={{ maxWidth: "90%", marginTop: "0rem", marginBottom: ".5rem" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchOutlinedIcon color="disabled" />
                            </InputAdornment>
                        ),
                    }}
                />
                { contacts && contacts.map(contact => <SingleSidebarUserProfile key={contact._id} contact={contact} />)}
                </>
                )
            }
            <ToastContainer 
                position="bottom-left"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </List>

        <Dialog open={openModal} onClose={handleCloseModal}>
            <form autoComplete="off" onSubmit={handleAddGroupForm} style={{ padding: '1rem', width: '500px'}}>
                <TextField 
                    label="Group Name"
                    variant="outlined" 
                    size="small" 
                    fullWidth
                    autoFocus
                    value={newGroup.name}
                    onChange={e => setNewGroup(groupInfo => ({ ...groupInfo, name: e.target.value }))} 
                />
                <br /><br />
                <Autocomplete
                    fullWidth
                    size="small"
                    multiple
                    disableCloseOnSelect
                    value={newGroup.members}
                    onChange={(e, newContactNames) => setNewGroup(groupInfo => ({ ...groupInfo, members: newContactNames }))}
                    options={contactNames}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option}
                        </li>
                      )}
                    renderInput={(params) => (
                        <TextField {...params} label="members" />
                    )}
                />
                <br />
                <Button
                    fullWidth
                    color="success"
                    type="submit"
                    variant="contained"
                >
                    Create
                </Button>
            </form>
        </Dialog>
        </>
        )
}
