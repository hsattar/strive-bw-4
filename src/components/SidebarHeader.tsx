import { Avatar, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MessageIcon from '@mui/icons-material/Message'
import PeopleIcon from '@mui/icons-material/People'
import useAxios from '../hooks/useAxios'
import { useSelector, useDispatch } from 'react-redux'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { changeSidebarViewAction } from '../redux/actions'
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


export default function SidebarHeader() {
    
    const { axiosRequest } = useAxios()
    const dispatch = useDispatch()
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    const currentlyViewing = useSelector((state: IReduxStore) => state.sidebar.currentlyViewing)

    return (
        <>
        { currentUser && (

            <Item elevation={0} style={{ backgroundColor: '#202C34', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                { currentlyViewing === 'conversations' ? 
                    <>
                    <Avatar alt={currentUser.username} src={currentUser.avatar} />
                    <Typography variant="subtitle1" style={{ paddingLeft: '1rem' }}>{currentUser.username}</Typography>
                    </> : 
                    <KeyboardBackspaceOutlinedIcon style={{ cursor: 'pointer' }}onClick={() => dispatch(changeSidebarViewAction('conversations'))} />
                }
            </div>
            <div>
                <PeopleIcon style={{ paddingRight: '1rem', cursor: 'pointer' }} onClick={() => dispatch(changeSidebarViewAction('users'))} />
                <MessageIcon style={{ paddingRight: '1rem', cursor: 'pointer' }} onClick={() => dispatch(changeSidebarViewAction('new-message'))} />
                <SettingsIcon style={{ cursor: 'pointer' }} onClick={() => dispatch(changeSidebarViewAction('settings'))} />
            </div>
        </Item>
        )}
        </>
    )
}