import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container/Container';
import Grid from "@mui/material/Grid/Grid";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
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
      <Grid className="convo_container">
        <Container sx={{
          display: "column"
        }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="body1" color="text.primary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardHeader
              subheader="09.00"
            />
          </Card>
          <Card sx={{ maxWidth: 345 }}>
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
        </Container>
      </Grid>

      {/* TEXT INPUT */}
        <Footer />
      </Box>
  )
}
