import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppBar from '@mui/material/AppBar/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as React from 'react';


const theme = createTheme({
    palette: {
        primary: { main: '#202C34' },
        secondary: { main: '#0066fg', light: '#0066fg' }
    }
})
export const Footer: React.FC =  () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IText>()
    const onSubmit: SubmitHandler<IText> = (data) => {
        console.log(data)
    }
    return (
    <ThemeProvider theme={theme}>
        <Box>
            <AppBar position='static'>
                    <Toolbar>
                        <Grid item xs={2}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                >
                                 <Badge>
                                     <InsertEmoticonIcon />
                                </Badge>
                             </IconButton>
                            <IconButton size="large"color="inherit">
                                <Badge>
                                    <AttachFileIcon />
                                </Badge>
                             </IconButton>
                        </Grid>
                        <Grid item xs={11} onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                fullWidth
                                type="search"
                                multiline
                                placeholder='Type a message'
                                color='secondary'
                                {...register ('text')}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge>
                                    <KeyboardVoiceIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
        </Box>
     </ThemeProvider >
    );
}
