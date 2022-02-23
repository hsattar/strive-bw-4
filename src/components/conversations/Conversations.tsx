import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container/Container';
import Grid from "@mui/material/Grid/Grid";
import Typography from '@mui/material/Typography';
import './convo.css';
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

export default function ConvoContainer() {
  return (
    <Box
      className="convo_wrapper"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
      {/* TOP BAR */}
      <TopBar />

      {/* CHAT BUBBLES */}
      <div className="convo_wrapper">
        <Container sx={{ display: "column" }}>
          <Card sx={{ maxWidth: 600, margin: 'normal', m: 1, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
              <CardHeader
                display="flex"
                justifiedContent="flex-end"
                subheader="09.00"
              />
          </Card>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', m: 1, }} >
            <Card sx={{ maxWidth: 600, bgcolor:'', borderRadius: 3}}>
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
              <CardHeader
                subheader="09.02"
              />
            </Card>
          </Box>
        </Container>
      </div>

      {/* TEXT INPUT */}
        <Footer />
      </Box>
  )
}
