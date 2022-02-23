import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversationAction } from '../redux/actions'

interface IProps {
    conversation: any
}

export default function SingleSidebarContact({ conversation }: IProps) {

    const dispatch = useDispatch()
    const selectedContact = useSelector((state: IReduxStore) => state.conversations.selected)

    const selected = selectedContact === conversation

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