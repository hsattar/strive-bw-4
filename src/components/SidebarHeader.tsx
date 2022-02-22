import { Avatar, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MessageIcon from '@mui/icons-material/Message'
import PeopleIcon from '@mui/icons-material/People'
import useAxios from '../hooks/useAxios'
import { useSelector } from 'react-redux'
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


export default function SidebarHeader() {
    
    const { axiosRequest } = useAxios()
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    
    const handleNewContact = async () => {
        const response = await axiosRequest('/contacts', 'POST', { name: 'Hasan' })
    }

    return (
        <Item elevation={0} style={{ backgroundColor: '#202C34', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt={currentUser.username} src={currentUser.avatar} />
                <Typography variant="subtitle1" style={{ paddingLeft: '1rem' }}>{currentUser.username}</Typography>
            </div>
            <div>
                <PeopleIcon style={{ paddingRight: '1rem'}}/>
                <MessageIcon style={{ paddingRight: '0.5rem'}} onClick={handleNewContact} />
                <MoreVertIcon />
            </div>
        </Item>
    )
}