import { styled } from '@mui/material/styles'
import { Container } from "@mui/material"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Login() {

    const navigate = useNavigate()
    const [userDetails, setUserDetails] =useState<IUserDetails>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const handleInput = (field: string, value: string) => {
        setUserDetails({
            ...userDetails,
            [field]: value
        })
    }

    return (
    <Container maxWidth="lg" style={{ minHeight: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={8}>
                <Item elevation={3}>
                    <Typography variant="h2" gutterBottom>WhatsApp Registration</Typography>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="First Name"
                                 variant="outlined" 
                                 fullWidth
                                 color="success" 
                                 style={{ margin: "1rem 0"}}
                                 onChange={e => handleInput('firstName', e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Last Name"
                                 variant="outlined" 
                                 fullWidth
                                 color="success" 
                                 style={{ margin: "1rem 0"}}
                                 onChange={e => handleInput('lastName', e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Username" 
                                variant="outlined" 
                                fullWidth
                                color="success" 
                                style={{ margin: "1rem 0"}}
                                onChange={e => handleInput('username', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Email" 
                                variant="outlined" 
                                fullWidth
                                color="success" 
                                style={{ margin: "1rem 0"}}
                                onChange={e => handleInput('email', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Password" 
                                variant="outlined" 
                                type="password" 
                                fullWidth
                                color="success" 
                                style={{ margin: "1rem 0"}}
                                onChange={e => handleInput('password', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Confirm Password"
                                 variant="outlined" 
                                 type="password" 
                                 fullWidth
                                 color="success" 
                                 style={{ margin: "1rem 0"}}
                                 onChange={e => handleInput('confirmPassword', e.target.value)}
                                />
                        </Grid>
                    </Grid>
                    <Button 
                        variant="contained" 
                        fullWidth color="success" 
                        style={{ margin: "1rem 0"}}
                    >
                    Register
                    </Button>
                    <Button 
                        onClick={() => navigate('/login')} 
                        variant="outlined" 
                        fullWidth 
                        color="success" 
                        style={{ margin: "0.25rem 0"}}
                    >
                    Login
                    </Button>
                </Item>
            </Grid>
        </Grid>
    </Container>
    )
}