import { InputAdornment, TextField } from '@mui/material'
import List from '@mui/material/List'
import SingleSidebarConversation from './SingleSidebarConversation'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { addToConversationArray } from '../redux/actions'
import SidebarUserProfiles from './SidebarUserProfiles'

export default function SidebarConversations() {

    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()
    const [searchInput, setSearchInput] = useState('')
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    const conversations = useSelector((state: IReduxStore) => state.sidebar.allConversations)

    const updateConversations = () => {
        if (conversations.length === 0) {
            if (currentUser) {
                const conversations = currentUser.conversations.length === 0 ? [] : (currentUser.conversations.map(conversation => conversation))
                dispatch(addToConversationArray(conversations))
            }
        }
        // else {
        //     const filtered = conversations.filter(conversation => conversation.name.toLowerCase().includes(searchInput.toLowerCase()))
        //     dispatch(addToConversationArray(filtered))
        // }
    }

    useEffect(() => {
        updateConversations()
    }, [searchInput, currentUser])

    return ( 
        <>
        { currentUser && (
        <List className="sidebar-contacts">
            {(conversations.length > 0 || searchInput) && <TextField 
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
                />}
            { (conversations.length === 0 && !searchInput) && <SidebarUserProfiles view="empty-convo" /> }
            { conversations.length > 0 && conversations.map(conversation => <SingleSidebarConversation key={conversation._id} conversation={conversation} /> ) }
        </List>
        )}
        </>
    )
}