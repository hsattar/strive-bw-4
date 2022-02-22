import { Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { selectContactAction } from '../redux/actions'

interface IProps {
    contact: any
}

export default function SingleSidebarContact({ contact }: IProps) {

    const dispatch = useDispatch()
    const selectedContact = useSelector((state: IReduxStore) => state.conversations.selected)

    const selected = selectedContact === contact

    return (
        <>
        <ListItem alignItems="center" className={selected ? "sidebar-single-contact selected-contact" : "sidebar-single-contact"} onClick={() => dispatch(selectContactAction(contact))}>
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary={ <Typography color="text.primary">Contact Name</Typography> }
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