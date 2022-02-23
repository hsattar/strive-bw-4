import { Grid } from "@mui/material";
import ConvoContainer from "./conversations/ConvoContainer";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <ConvoContainer />
      </Grid>
    </Grid>
  )
}
