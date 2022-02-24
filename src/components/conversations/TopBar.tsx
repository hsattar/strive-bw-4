import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader/CardHeader'
import IconButton from '@mui/material/IconButton'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const topBartheme = createTheme({ palette: { primary: { main: '#202C34'}}})

export const TopBar = () => {

    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    const selectedConversation = useSelector((state: IReduxStore) => state.sidebar.conversationSelected)
    const [otherUser, setOtherUser] = useState<IUser[] | null>(null)
    
    useEffect(() =>{
        selectedConversation && setOtherUser(selectedConversation.members.filter(member => member._id !== currentUser?._id))
    }, [selectedConversation])

    return (
        <>
        {
            (selectedConversation && otherUser) ? (
                <ThemeProvider theme ={topBartheme}>
                    <Box>
                        <AppBar position='static'>
                            <Toolbar>
                                <CardHeader
                                    avatar={
                                        <Avatar src={selectedConversation.name || otherUser[0].username} alt={selectedConversation.name || otherUser[0].username} />
                                        }
                                        title={selectedConversation.name || otherUser[0].username}
                                        subheader={`Last seen ${otherUser[0].lastSeen}`}
                                    />
                                <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                </Box>
                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <IconButton size="large" color="inherit">
                                        <Badge>
                                            <SearchIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        color="inherit"
                                    >
                                        <Badge>
                                            <MoreVertIcon />
                                        </Badge>
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </ThemeProvider>
            ) : (
                <ThemeProvider theme ={topBartheme}>
                    <Box>
                        <AppBar position='static'>
                            <Toolbar>
                                <CardHeader
                                        title={``}
                                        subheader={``}
                                    />
                                <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                </Box>
                                <Box sx={{ flexGrow: 1 }} />
                            </Toolbar>
                        </AppBar>
                    </Box>
                </ThemeProvider>
            )
        }
        </>
    )
}