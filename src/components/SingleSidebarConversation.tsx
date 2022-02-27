import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { getHours, getMinutes } from 'date-fns'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversationAction } from '../redux/actions'

interface IProps {
    conversation: IConversation
}

export default function SingleSidebarConversation({ conversation }: IProps) {

    const hours = getHours(new Date(conversation.lastMessage?.sentAt))
    const minutes = getMinutes(new Date(conversation.lastMessage?.sentAt))
    let time
    if (hours < 10 && minutes < 10) {
        time = `0${hours}:0${minutes}`
    } else if (hours < 10) {
        time = `0${hours}:${minutes}`
    } else if (minutes < 10) {
        time = `${hours}:0${minutes}`
    } else {
        time = `${hours}:${minutes}`
    }
    if (!hours || !minutes) time = ''
    
    const dispatch = useDispatch()
    const selectedConversation = useSelector((state: IReduxStore) => state.sidebar.conversationSelected)
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    const [selected, setSelected] = useState(false) 

    const selectConvo = () => {
        if (selectedConversation) {
            setSelected(selectedConversation._id === conversation._id)
        }
    } 

    useEffect(() => {
        selectConvo()
    }, [selectedConversation])

    const otherUser = conversation.members.filter(member => {
        if (member._id !== currentUser?._id) {
            return member
        }
    })

    const ticks = conversation.lastMessage?.ticks === 3 ? '✔✔✔' : conversation.lastMessage?.ticks === 2 ? '✔✔' : '✔'

    return (
        <>
        { otherUser[0] && (
        <ListItem alignItems="center" className={selected ? "sidebar-single-contact selected-contact" : "sidebar-single-contact"} onClick={() => dispatch(selectConversationAction(conversation))}>
            <ListItemAvatar>
            <Avatar alt={conversation.name || otherUser[0].username} src={conversation.name || otherUser[0].username} />
            </ListItemAvatar>
            <ListItemText
            primary={ 
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.primary">{conversation.name || otherUser[0].username}</Typography>
                    <Typography style={{ color: '#727f88'}}>{time}</Typography>
                </div>
                }
            secondary={
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    textOverflow="ellipsis"
                >
                    {conversation.lastMessage?.sender === currentUser?._id ? `${ticks} ${conversation.lastMessage?.text}` : conversation.lastMessage?.text}
                </Typography>
            }
            />
        </ListItem>
        )
        }
        </>
    )
}

// #40474B