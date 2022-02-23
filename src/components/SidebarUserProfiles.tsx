import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { InputAdornment, TextField, Typography } from '@mui/material'
import List from '@mui/material/List'
import { FormEvent, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import SingleSidebarUserProfile from './SingleSidebarUserProfile'

interface IProps {
    view: 'users'| 'new-message'
}

export default function SidebarUserProfiles({ view }: IProps) {

    const [email, setEmail] = useState('')
    const { axiosRequest } = useAxios()

    const [people, setPeople] = useState<any>(null)

    const fetchPeople = async () => {
        const response = await axiosRequest('/users/me/contacts', 'GET')
        console.log(response)
        setPeople(response.data)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await axiosRequest('/users/contact', 'POST', { email } )
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return (
        <>
        { people && (
            <List className="sidebar-contacts">
                {
                    view === 'users' ? (
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
                    ) : (
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
                        { people.map((person: any) => <SingleSidebarUserProfile key={person} person={person} />)}
                        </>
                    )
                }
        </List>
        )}
        </>
        )
}
