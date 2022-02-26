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
import { useCallback, useRef } from "react"



export default function ConvoContainer() {
  const currentUserId = useSelector((state: IReduxStore) => state.user.currentUser?._id)
  const conversationMessages = useSelector((state: IReduxStore) => state.sidebar.conversationSelected?.chatHistory)
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true})
    }
  }, [])

  //   const turnMsToTime = (duration: number) => {
  //     const milliseconds = parseInt((duration % 1000) / 100),
  //       seconds = Math.floor((duration / 1000) % 60),
  //       minutes = Math.floor((duration / (1000 * 60)) % 60),
  //       hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  //     hours = (hours < 10) ? "0" + hours : hours
  //     minutes = (minutes < 10) ? "0" + minutes : minutes
  //     seconds = (seconds < 10) ? "0" + seconds : seconds

  //     return hours + ":" + minutes + ":" + seconds + "." + milliseconds
  // }

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
          <Container sx={{ display: "column"}}>
          {
            conversationMessages?.map((msg, index) => {
              const lastMessage = conversationMessages.length -1 === index
              return currentUserId === msg.sender ? (
                <div key={index} ref={lastMessage ? setRef: null}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1, }}>
                    <Card sx={{ maxWidth: 600, bgcolor: '#005C4B', borderRadius: 3 }}>
                      <CardContent>
                        <Typography variant="body1" color="text.primary">
                          {msg.text}
                        </Typography>
                      </CardContent>
                      <Typography m={2} variant="caption" color="text.secondary">{new Date(msg.sentAt).toString().split('GMT+0000')[0]}</Typography>
                    </Card>
                  </Box>
              </div>
              ) : (
                <div key={index} ref={lastMessage ? setRef: null}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', m: 1, }} >
                    <Card sx={{ maxWidth: 600, bgcolor: '#202C33', margin: 'normal', m: 1, borderRadius: 3 }}>
                      <CardContent>
                        <Typography variant="body1" color="text.primary">
                          {msg.text}
                        </Typography>
                      </CardContent>
                      <Typography m={2} variant="caption" color="text.secondary">{new Date(msg.sentAt).toString().split('GMT+0000')[0]}</Typography>
                    </Card>
                  </Box>
              </div>
              )
            })
          }
          </Container>
        </ScrollToBottom>
      </div>
      <Footer />
    </Box>
  )
}

