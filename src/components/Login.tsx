import { styled } from '@mui/material/styles'
import { Alert, Container } from "@mui/material"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import useAxios from '../hooks/useAxios'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../redux/actions'
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()

    const [loading, setLoading] = useState(false)
    const [userError, setUserError] = useState(false)
    const [invalidDetails, setInvalidDetails] = useState(false)
    const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState({
        email: false,
        password: false
    })

    const handleInput = (field: string, value: string) => {
        setUserCredentials(credentials => ({
            ...credentials,
            [field]: value
        }))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        setUserError(false)
        setInvalidDetails(false)
        setLoginError({
            email: false,
            password: false
        })
        if (!userCredentials.email) setLoginError(errors => ({ ...errors, email: true }))
        if (!userCredentials.password) setLoginError(errors => ({ ...errors, password: true }))
        if (!userCredentials.email || !userCredentials.password) setUserError(true)

        setLoading(true)
        const response = await axiosRequest('/users/login', 'POST', userCredentials)
        if (response.status === 401) setInvalidDetails(true)
        if (response.status === 200) {
            dispatch(userLoginAction())
            navigate('/')
        }
        setLoading(false)
    }

    return (
    <Container maxWidth="lg" style={{ minHeight: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={8}>
                <Item elevation={3}>
                    <Typography variant="h2" gutterBottom>WhatsApp Login</Typography>
                    { userError && <Alert severity="error">Please Fill In Missing Fields!</Alert> }
                    { invalidDetails && <Alert severity="error">Your Details Are Incorrect!</Alert> }
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        color="success"
                        style={{ margin: "1rem 0"}}
                        value={userCredentials.email}
                        onChange={e => handleInput('email', e.target.value)}
                        error={loginError.email}
                    />
                    <TextField 
                        label="Password" 
                        variant="outlined" 
                        type="password" 
                        fullWidth 
                        color="success"
                        style={{ margin: "1rem 0"}}
                        value={userCredentials.password }
                        onChange={e => handleInput('password', e.target.value)}
                        error={loginError.password}
                    />
                    <LoadingButton 
                        type="submit"
                        variant="contained" 
                        fullWidth 
                        color="success" 
                        style={{ margin: "1rem 0"}}
                        disabled={loading}
                        loading={loading}
                    >
                        Login
                    </LoadingButton>
                    </form>
                    <Button 
                        onClick={() => navigate('/register')} 
                        variant="outlined" 
                        fullWidth 
                        color="success" 
                        style={{ margin: "0.25rem 0"}}
                        disabled={loading}
                    >
                        Register
                    </Button>
                </Item>
            </Grid>
        </Grid>
    </Container>
    )
}