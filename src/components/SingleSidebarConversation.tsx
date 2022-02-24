import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversationAction } from '../redux/actions'

interface IProps {
    conversation: IConversation
}

export default function SingleSidebarConversation({ conversation }: IProps) {

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
        console.log(otherUser)
    }, [selectedConversation])

    const otherUser = conversation.members.filter(member => {
        if (member._id !== currentUser?._id) {
            return member
        }
    })

    console.log(otherUser)

    return (
        <>
        { otherUser[0] && (
        <ListItem alignItems="center" className={selected ? "sidebar-single-contact selected-contact" : "sidebar-single-contact"} onClick={() => dispatch(selectConversationAction(conversation))}>
            <ListItemAvatar>
            <Avatar alt={conversation.name || otherUser[0].username} src={conversation.name || otherUser[0].username} />
            </ListItemAvatar>
            <ListItemText
            primary={ <Typography color="text.primary">{conversation.name || otherUser[0].username}</Typography> }
            secondary={
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    textOverflow="ellipsis"
                >
                    Last Message
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