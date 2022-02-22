import { Avatar, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MessageIcon from '@mui/icons-material/Message'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import useAxios from '../hooks/useAxios'
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


export default function SidebarHeader() {
    
    const { axiosRequest } = useAxios()
    
    const handleNewContact = async () => {
        const response = await axiosRequest('/contacts', 'POST', { name: 'Hasan' })
    }

    return (
        <Item elevation={0} style={{ backgroundColor: '#202C34', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography variant="subtitle1" style={{ paddingLeft: '1rem' }}>Name</Typography>
            </div>
            <div>
                <CircleOutlinedIcon style={{ paddingRight: '1rem'}}/>
                <MessageIcon style={{ paddingRight: '0.5rem'}} onClick={handleNewContact} />
                <MoreVertIcon />
            </div>
        </Item>
    )
}