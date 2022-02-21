import { Button, Container } from "@mui/material"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function NotFound() {

    const navigate = useNavigate()

    return (
    <Container maxWidth="lg" style={{ minHeight: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={8}>
                <Item elevation={3}>
                    <Typography variant="h3" gutterBottom style={{ color: "#66bb6a" }}>Sorry We Couldn't Find What You Were Looking For</Typography>
                    <Button variant="outlined" fullWidth color="success" size="large" onClick={() => navigate('/')}>Go Home</Button>
                </Item>
            </Grid>
        </Grid>
    </Container>
    )
}