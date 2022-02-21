import { styled } from '@mui/material/styles'
import { Container } from "@mui/material"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Login() {

    const navigate = useNavigate()

    return (
    <Container maxWidth="lg" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={8}>
                <Item elevation={3}>
                    <Typography variant="h2" gutterBottom>WhatsApp Login</Typography>
                    <TextField label="Username" variant="outlined" fullWidth style={{ margin: "1rem 0"}}/>
                    <TextField label="Password" variant="outlined" type="password" fullWidth style={{ margin: "1rem 0"}}/>
                    <Button variant="contained" fullWidth color="success" style={{ margin: "1rem 0"}}>Login</Button>
                    <Button onClick={() => navigate('/register')} variant="outlined" fullWidth color="success" style={{ margin: "0.25rem 0"}}>Register</Button>
                </Item>
            </Grid>
        </Grid>
    </Container>
    )
}