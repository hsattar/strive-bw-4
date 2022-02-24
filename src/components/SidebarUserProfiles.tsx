import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import List from '@mui/material/List'
import { FormEvent, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import SingleSidebarUserProfile from './SingleSidebarUserProfile'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { addAnotherContactToListOfContactsAction, addToListOfContactsAction } from '../redux/actions'

interface IProps {
    view: 'users'| 'new-message' | 'empty-convo'
}

export default function SidebarUserProfiles({ view }: IProps) {

    const [email, setEmail] = useState('')
    const { axiosRequest } = useAxios()
    const dispatch = useDispatch()
    const contacts = useSelector((state: IReduxStore) => state.sidebar.contacts)

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
            notify()
            setEmail('')
            dispatch(addAnotherContactToListOfContactsAction(response.data))
        }

    }

    const notify = () => toast.success('Successfully saved the contact!', {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    useEffect(() => {
        fetchPeople()
    }, [])

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
                >
                    Create New Group
                </Button>
                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
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
                            <SearchOutlinedIcon color="disabled" />
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
        </>
        )
}
