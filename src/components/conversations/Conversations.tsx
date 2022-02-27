import Box from "@mui/material/Box"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container/Container'
import Typography from '@mui/material/Typography'
import { useSelector } from "react-redux"
import './convo.css'
import { Footer } from "./Footer"
import { TopBar } from "./TopBar"
import ScrollToBottom from 'react-scroll-to-bottom'
import { getHours, getMinutes } from 'date-fns'



export default function ConvoContainer() {
  const currentUserId = useSelector((state: IReduxStore) => state.user.currentUser?._id)
  const conversationMessages = useSelector((state: IReduxStore) => state.sidebar.conversationSelected?.chatHistory)

  return (
    <Box
      className="convo_wrapper"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}>
      {/* TOP BAR */}
      <TopBar />

      {/* CHAT BUBBLES */}
      <div className="convo_wrapper">
        <ScrollToBottom checkInterval={17}>
        <Container sx={{ display: "column" }}>
          { conversationMessages?.map(msg => {
            const hours = getHours(new Date(msg.sentAt))
            const minutes = getMinutes(new Date(msg.sentAt))
            let time
            if (hours < 10 && minutes < 10) {
              time = `0${hours}:0${minutes}`
            } else if (hours < 10) {
              time = `0${hours}:${minutes}`
            } else if (minutes < 10) {
              time = `${hours}:0${minutes}`
            } else {
              time = `${hours}:${minutes}`
            }

            const ticks = msg.ticks === 3 ? '✔✔✔' : msg.ticks === 2 ? '✔✔' : '✔'
              return currentUserId === msg.sender ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 0 }} >
                  <Card sx={{ maxWidth: 600, bgcolor: '#005C4B', m: 0.5, borderRadius: 2, display: 'flex' }}>
                    <CardContent style={{ paddingTop: '4px', paddingBottom: 0 }}>
                      <Typography variant="body1" color="text.primary">{msg.text}</Typography>
                    </CardContent>
                    <Typography m={2} variant="caption" color="text.secondary" style={{ justifyContent: 'flex-end', marginBottom: 0, marginLeft: 0 }}>{`${time} ${ticks}`}</Typography>
                  </Card>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', m: 0 }} >
                  <Card sx={{ maxWidth: 600, bgcolor: '#202C33', m: 0.5, borderRadius: 2, display: 'flex' }}>
                    <CardContent style={{ paddingTop: '4px', paddingBottom: 0 }}>
                      <Typography variant="body1" color="text.primary">{msg.text}</Typography>
                    </CardContent>
                    <Typography m={2} variant="caption" color="text.secondary" style={{ justifyContent: 'flex-end', marginBottom: 0, marginLeft: 0 }}>{time}</Typography>
                  </Card>
                </Box>
              )
            }) }
        </Container>
        </ScrollToBottom>
      </div>
      <Footer />
    </Box>
  )
}


