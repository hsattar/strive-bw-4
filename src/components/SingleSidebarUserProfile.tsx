import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'

interface IProps {
    person: any
}

export default function SingleSidebarUserProfile({ person }: IProps) {

    const dispatch = useDispatch()

    return (
        <>
        <ListItem alignItems="center" className="sidebar-single-contact">
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
                    Status
                </Typography>
            }
            />
        </ListItem>
        </>
    )
}

// #40474B