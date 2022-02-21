import { styled } from '@mui/material/styles'
import { Alert, Container } from "@mui/material"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import useAxios from '../hooks/useAxios' 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function Login() {

    const navigate = useNavigate()
    const { axiosRequest } = useAxios()

    const [userError, setUserError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [userDetails, setUserDetails] =useState<IUserDetails>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [registrationError, setRegistrationError] = useState({
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    })
    
    const handleInput = (field: string, value: string) => {
        setUserDetails(details => ({
            ...details,
            [field]: value
        }))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        setUserError(false)
        setPasswordError(false)
        setRegistrationError({
            firstName: false,
            lastName: false,
            username: false,
            email: false,
            password: false,
            confirmPassword: false
        })

        const { firstName, lastName, username, email, password, confirmPassword } = userDetails

        if (!firstName) setRegistrationError(errors => ({ ...errors, firstName: true }))
        if (!lastName) setRegistrationError(errors => ({ ...errors, lastName: true }))
        if (!username) setRegistrationError(errors => ({ ...errors, username: true }))
        if (!email) setRegistrationError(errors => ({ ...errors, email: true }))
        if (!password) setRegistrationError(errors => ({ ...errors, password: true }))
        if (!confirmPassword) setRegistrationError(errors => ({ ...errors, confirmPassword: true }))
        if (!firstName || !lastName || !username || !email || !password || !confirmPassword) setUserError(true)
        if (password !== confirmPassword) setPasswordError(true)

        const response: any = await  axiosRequest('/users', 'POST', userDetails)
        if (response.status === 400) console.log('bad request')
    }

    return (
    <Container maxWidth="lg" style={{ minHeight: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={8}>
                <Item elevation={3}>
                    <Typography variant="h2" gutterBottom>WhatsApp Registration</Typography>
                    { userError && <Alert severity="error">Please Fill In Missing Fields!</Alert> }
                    { passwordError && <Alert severity="error">Please Check Your Passwords Match!</Alert> }
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="First Name"
                                 variant="outlined" 
                                 fullWidth
                                 color="success" 
                                 style={{ margin: "0.5rem 0", marginTop: "1rem"}}
                                 value={userDetails.firstName}
                                 onChange={e => handleInput('firstName', e.target.value)}
                                 required
                                 error={registrationError.firstName}
                                />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Last Name"
                                 variant="outlined" 
                                 fullWidth
                                 color="success" 
                                 style={{ margin: "0.5rem 0", marginTop: "1rem"}}
                                 value={userDetails.lastName}
                                 onChange={e => handleInput('lastName', e.target.value)}
                                 required
                                 error={registrationError.lastName}
                                />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Username" 
                                variant="outlined" 
                                fullWidth
                                color="success" 
                                style={{ margin: "0.5rem 0"}}
                                value={userDetails.username}
                                onChange={e => handleInput('username', e.target.value)}
                                required
                                error={registrationError.username}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Email" 
                                variant="outlined" 
                                fullWidth
                                color="success" 
                                style={{ margin: "0.5rem 0"}}
                                value={userDetails.email}
                                onChange={e => handleInput('email', e.target.value)}
                                type="email"
                                required
                                error={registrationError.email}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Password" 
                                variant="outlined" 
                                type="password" 
                                fullWidth
                                color="success" 
                                style={{ margin: "0.5rem 0"}}
                                value={userDetails.password}
                                onChange={e => handleInput('password', e.target.value)}
                                required
                                error={registrationError.password}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <TextField 
                                label="Confirm Password"
                                 variant="outlined" 
                                 type="password" 
                                 fullWidth
                                 color="success" 
                                 style={{ margin: "0.5rem 0"}}
                                 value={userDetails.confirmPassword}
                                 onChange={e => handleInput('confirmPassword', e.target.value)}
                                 required
                                 error={registrationError.confirmPassword}
                                />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit" 
                        variant="contained" 
                        fullWidth color="success" 
                        style={{ margin: "1rem 0"}}
                    >
                    Register
                    </Button>
                    </form>
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