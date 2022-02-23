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
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import { TextField } from '@mui/material';
import { io } from 'socket.io-client'
import { useEffect, useState } from "react"

const theme = createTheme({
    palette: {
        primary: { main: '#202C34' },
        secondary: { main: '#536169' },
        mode: 'dark'
    }
})


const { REACT_APP_BE_URL } = process.env
const socket = io(REACT_APP_BE_URL!, { transports: ['websocket'] })

export const Footer: React.FC = () => {

    const [message, setMessage] = useState('')

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        socket.emit('sendMessage', ({ messageContent: message, conversationId: 'sdsda' }))
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log(socket.id);
        })
        socket.on('message', (message) => {
            console.log(message);
        })
    }, [])

    // const { register, handleSubmit, formState: { errors } } = useForm<IText>()
    // const onSubmit: SubmitHandler<IText> = (data) => {

    // }

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar position='static' style={{ backgroundColor: '#202C34' }}>
                    <Toolbar>
                        <Grid item xs={2}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="secondary"
                            >
                                <Badge>
                                    <InsertEmoticonIcon />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" color="secondary">
                                <Badge>
                                    <AttachFileIcon color="secondary" />
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item xs={11}>
                            <form onSubmit={handleSendMessage}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    // multiline
                                    placeholder='Type a message'
                                    // color="#C8CED0"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </form>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="secondary"

                            >
                                <Badge>
                                    <KeyboardVoiceIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="secondary"
                            >
                                <Badge>
                                    <SendIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider >
    );
}
