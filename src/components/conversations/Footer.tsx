import AttachFileIcon from '@mui/icons-material/AttachFile'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import SendIcon from '@mui/icons-material/Send'
import { TextField } from '@mui/material'
import AppBar from '@mui/material/AppBar/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import Picker from 'emoji-picker-react'
import { FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { addMessageToConversationAction, updateConversationTicksAction } from '../../redux/actions'

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
    const allConversations = useSelector((state: IReduxStore) => state.sidebar.allConversations)
    const senderId = useSelector((state: IReduxStore) => state.user.currentUser?._id)
    const [isMessaging, setIsMessaging] = useState(false)
    const [chooseEmoji, setChooseEmonji] = useState(false)
    const [openEmojiKeyboard, setOpenEmojiKeyBoard] = useState(false)

    const handleEmojiCLick = (e: any, emojiObject: any) => {
        setMessage(msg => msg.concat(emojiObject.emoji))
    }

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        socket.emit('sendMessage', ({ messageContent: message, conversationId, senderId, sentAt: Date.now() }))
        dispatch(addMessageToConversationAction({ text: message, sender: senderId, sentAt: Date.now() } as IMessage))
        setMessage('')
    }

    useEffect(() => {
        socket.on('connect', () => {
            socket.emit('online', { senderId })
        })

        socket.on('receiveMessage', ({ messageContent, senderId, sentAt, ticks }) => {
            dispatch(addMessageToConversationAction({ text: messageContent, sender: senderId, sentAt, ticks }))
            console.log('here')
            socket.emit('delivered', { conversationId })
        })

        socket.on('msg-received', ({ conversationId }) => {
            console.log('msg-received')
            const conversations = allConversations.map(convo => convo._id === conversationId ? { ...convo, ticks: 2 } : convo)
            dispatch(updateConversationTicksAction(conversations))
        })
    }, [])

    useEffect(() => {
        socket.emit('newConnection', { room: conversationId || 'public' })
    }, [conversationId])

    return (
        <ThemeProvider theme={theme}>
            <Box>
                { openEmojiKeyboard && <Picker onEmojiClick={handleEmojiCLick} /> }
                <AppBar position='static' style={{ backgroundColor: '#202C34' }}>
                    <Toolbar>
                        <Grid item xs={2}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="secondary"
                                onClick={e => setOpenEmojiKeyBoard(true)}
                            >
                                <Badge>
                                    <InsertEmoticonIcon onClick={() => setOpenEmojiKeyBoard(prev => !prev)} />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" color="secondary">
                                <Badge>
                                    <AttachFileIcon color="secondary" />
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item xs={11}>
                            <form autoComplete="off" onSubmit={handleSendMessage}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    // multiline
                                    placeholder='Type a message'
                                    disabled={conversationId ? false : true}
                                    value={message}
                                    onFocus={() => setOpenEmojiKeyBoard(false)}
                                    onChange={e => setMessage(e.target.value)}
                                    onInput={(e) => setIsMessaging(true)}
                                    onBlur={(e) => setIsMessaging(false)}
                                />
                            </form>
                        </Grid>
                        {message.length > 0 ? (
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
                            
                        ): (
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
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider >
    )
}
