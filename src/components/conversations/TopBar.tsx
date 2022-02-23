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

const topBartheme = createTheme({ palette: { primary: { main: '#202C34'}}})

export const TopBar = () => {
    return (
        <ThemeProvider theme ={topBartheme}>
            <Box>
                <AppBar position='static'>
                    <Toolbar>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                                }
                                title="Roby Morgan"
                                subheader="Last seen, September 14, 2016"
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
    )
}