import { InputAdornment, TextField } from '@mui/material'
import List from '@mui/material/List'
import SingleSidebarConversation from './SingleSidebarConversation'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { addToConversationArray } from '../redux/actions'

export default function SidebarConversations() {

    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()
    const [searchInput, setSearchInput] = useState('')
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    const conversations = useSelector((state: IReduxStore) => state.sidebar.allConversations)

    const updateConversations = () => {
        if (currentUser) {
            const conversations = (currentUser.conversations.length === 0 && (typeof currentUser.conversations !== 'string')) ? [] : (currentUser.conversations.map((conversation: any) => conversation.members.filter((member: any) => (member._id !== currentUser._id) && (member.username.toLowerCase().includes(searchInput.toLowerCase())))))
            dispatch(addToConversationArray(conversations[0] || conversations))
        }
    }

    useEffect(() => {
        updateConversations()
    }, [searchInput, currentUser])

    return (
        <>
        { currentUser && (
        <List className="sidebar-contacts">
            <TextField 
                placeholder="Search"
                variant="outlined" 
                size="small" 
                fullWidth 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                style={{ maxWidth: "90%", marginTop: "0rem", marginBottom: ".5rem" }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchOutlinedIcon color="disabled" />
                        </InputAdornment>
                    ),
                }}
            />
            { conversations.map((conversation: any) => <SingleSidebarConversation conversation={conversation} /> ) }
        </List>
        )}
        </>
    )
}