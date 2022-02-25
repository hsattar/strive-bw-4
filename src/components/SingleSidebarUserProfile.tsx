import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { addAnotherConversationToConversationArray, changeSidebarViewAction, selectConversationAction } from '../redux/actions'


interface IProps {
    contact: IUser
}

export default function SingleSidebarUserProfile({ contact }: IProps) {

    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()

    const handleNewConversation = async () => {
        const response = await axiosRequest('/conversations/newConvo', 'POST', { recipientId: contact._id })
        if (response.status === 200) {
            dispatch(addAnotherConversationToConversationArray(response.data))
            dispatch(changeSidebarViewAction('conversations'))
            dispatch(selectConversationAction(response.data))
        }
        if (response.status === 202) {
            dispatch(changeSidebarViewAction('conversations'))
            dispatch(selectConversationAction(response.data))
        } 
    }   

    return (
        <>
        <ListItem alignItems="center" className="sidebar-single-contact" onClick={handleNewConversation}>
            <ListItemAvatar>
            <Avatar alt={contact.username} src={contact.avatar} />
            </ListItemAvatar>
            <ListItemText
            primary={ <Typography color="text.primary">{contact.username}</Typography> }
            secondary={
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    textOverflow="ellipsis"
                >
                    {contact.status}
                </Typography>
            }
            />
        </ListItem>
        </>
    )
}