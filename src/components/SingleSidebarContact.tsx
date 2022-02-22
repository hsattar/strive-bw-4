import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function SingleSidebarContact() {
    return (
        <ListItem alignItems="center">
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
    )
}

{/* <Divider variant="inset" component="li" /> */}