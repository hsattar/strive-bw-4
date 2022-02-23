import { Grid } from "@mui/material";
import Conversations from "./conversations/Conversations";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Conversations />
      </Grid>
    </Grid>
  )
}
