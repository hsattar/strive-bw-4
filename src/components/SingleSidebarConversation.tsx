import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToConversationArray, selectConversationAction } from '../redux/actions'

interface IProps {
    conversation: any
}

export default function SingleSidebarConversation({ conversation }: IProps) {

    const dispatch = useDispatch()
    const selectedContact = useSelector((state: IReduxStore) => state.sidebar.selected)
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)

    const selected = selectedContact === conversation

    // const otherPerson = conversation.members.filter((member: any) => member._id !== currentUser._id)

    return (
        <>
        <ListItem alignItems="center" className={selected ? "sidebar-single-contact selected-contact" : "sidebar-single-contact"} onClick={() => dispatch(selectConversationAction(conversation))}>
            <ListItemAvatar>
            <Avatar alt={conversation.username} src={conversation.avatar} />
            </ListItemAvatar>
            <ListItemText
            primary={ <Typography color="text.primary">{conversation.username}</Typography> }
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
        </>
    )
}

// #40474B