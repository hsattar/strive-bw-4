import { Grid } from "@mui/material";
import Messages from "./Messages";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Messages />
      </Grid>
    </Grid>
  )
}
