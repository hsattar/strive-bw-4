import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { InputAdornment, TextField, Typography } from '@mui/material'
import List from '@mui/material/List'
import { FormEvent, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import SingleSidebarUserProfile from './SingleSidebarUserProfile'

interface IProps {
    view: 'users'| 'new-message' | 'empty-convo'
}

export default function SidebarUserProfiles({ view }: IProps) {

    const [email, setEmail] = useState('')
    const { axiosRequest } = useAxios()

    const [people, setPeople] = useState<IUser[] | null>(null)

    const fetchPeople = async () => {
        const response = await axiosRequest('/users/me/contacts', 'GET')
        if (response.data) {
            setPeople(response.data)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await axiosRequest('/users/contact', 'POST', { email } )
    }

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
                { view === 'users' && (
            <form onSubmit={handleSubmit}>
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
                    ),
                }}
                />
                </form>
                    ) }
                    { view === 'new-message' && (
                        <>
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
                        { people && people.map(person => <SingleSidebarUserProfile key={person._id} person={person} />)}
                        </>
                    )
                }
        </List>
        </>
        )
}
