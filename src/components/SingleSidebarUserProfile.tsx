import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { addAnotherConversationToConversationArray, changeSidebarViewAction, selectConversationAction } from '../redux/actions'

interface IProps {
    person: IUser
}

export default function SingleSidebarUserProfile({ person }: IProps) {

    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()

    const handleNewConversation = async () => {
        dispatch(addAnotherConversationToConversationArray(person))
        const response = await axiosRequest('/conversations/newConvo', 'POST', { recipientId: person._id })
        dispatch(changeSidebarViewAction('conversations'))
        console.log(response)
        dispatch(selectConversationAction(response.data))
    }   

    return (
        <>
        <ListItem alignItems="center" className="sidebar-single-contact" onClick={handleNewConversation}>
            <ListItemAvatar>
            <Avatar alt={person.username} src={person.avatar} />
            </ListItemAvatar>
            <ListItemText
            primary={ <Typography color="text.primary">{person.username}</Typography> }
            secondary={
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    textOverflow="ellipsis"
                >
                    {person.status}
                </Typography>
            }
            />
        </ListItem>
        </>
    )
}