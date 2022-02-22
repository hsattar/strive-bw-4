import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MessageIcon from '@mui/icons-material/Message'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function SidebarHeader() {

    return (
        <Item elevation={0} style={{ backgroundColor: '#202C34', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1">Name</Typography>
            <div>
                <CircleOutlinedIcon style={{ paddingRight: '1rem'}}/>
                <MessageIcon style={{ paddingRight: '0.5rem'}} />
                <MoreVertIcon />
            </div>
        </Item>
    )
}