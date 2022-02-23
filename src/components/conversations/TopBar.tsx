import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import red from '@mui/material/colors/red';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const topBartheme = createTheme({ palette: { primary: { main: '#202C34'}}})

export const TopBar = () => {

    const selectedConversation = useSelector((state: IReduxStore) => state.sidebar.conversationSelected)

    return (
        <>
        {
            selectedConversation ? (
                <ThemeProvider theme ={topBartheme}>
                    <Box>
                        <AppBar position='static'>
                            <Toolbar>
                                <CardHeader
                                    avatar={
                                        <Avatar src={selectedConversation.avatar} alt={selectedConversation.username} />
                                        }
                                        title={`${selectedConversation.firstName} ${selectedConversation.lastName}`}
                                        subheader={`Last seen ${selectedConversation.lastSeen}`}
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