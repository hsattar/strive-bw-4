import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { addMessageToConversationAction } from '../../redux/actions';

const theme = createTheme({
    palette: {
        primary: { main: '#202C34' },
        secondary: { main: '#536169' },
        mode: 'dark'
    }
})


const { REACT_APP_BE_URL } = process.env
const socket = io(REACT_APP_BE_URL!, { transports: ['websocket'] })

export const Footer = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const conversationId = useSelector((state: IReduxStore) => state.sidebar.conversationSelected?._id)
    const senderId = useSelector((state: IReduxStore) => state.user.currentUser?._id)

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        socket.emit('sendMessage', ({ messageContent: message, conversationId, senderId, sentAt: Date.now() }))
        dispatch(addMessageToConversationAction({ messageContent: message, senderId, sentAt: Date.now() } as IMessage))
        setMessage('')
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connection is now established!')
        })
        socket.emit('newConnection', { room: conversationId || 'public' })

        socket.on('receiveMessage', ({ messageContent, senderId, sentAt }) => {
            console.log('new message received!')
            console.log(message)
            dispatch(addMessageToConversationAction({ messageContent, senderId, sentAt }))
        })
    }, [])

    useEffect(() => {
        socket.emit('newConnection', { room: conversationId })
        console.log(`I am in room ${conversationId}`);

    }, [conversationId])

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
