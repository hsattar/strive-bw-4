import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { InputAdornment, TextField } from '@mui/material'
import List from '@mui/material/List'
import { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import SingleSidebarUserProfile from './SingleSidebarUserProfile'

interface IProps {
    currentlyViewing: 'new-message' | 'users'    
}

export default function SidebarUserProfiles({ currentlyViewing}: IProps) {

    const { axiosRequest } = useAxios()
    const url = currentlyViewing === 'users' ? '/users/everyone-else' : '/users/me/contacts'

    const [people, setPeople] = useState<any>(null)

    const fetchPeople = async () => {
        const response = await axiosRequest(url, 'GET')
        console.log(response)
        setPeople(response.data)
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return (
        <>
        { people && (
            <List className="sidebar-contacts">
            <TextField 
                placeholder="Search"
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
        </List>
        )}
        </>
        )
}
