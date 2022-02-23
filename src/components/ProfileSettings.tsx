import { Avatar, Button, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import { changeUserThemeAction, logOutUserAction } from '../redux/actions'
import { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'

export default function ProfileSettings() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)
    const userTheme = useSelector((state: IReduxStore) => state.user.theme)
    const isLight = userTheme === 'light'

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        currentUser && setUserDetails({
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            username: currentUser.username,
            email: currentUser.email,
            password: currentUser.password
        })
    }, [currentUser])

    const handleLogOut = () => {
        dispatch(logOutUserAction())
        navigate('/login')
    }   

    return (
        <>
        { currentUser && (
        <Stack className="sidebar-contacts" spacing={2}>
            <Avatar
                alt={currentUser.username}
                src={currentUser.avatar}
                sx={{ width: 175, height: 175, margin: '1rem 0' }}
            />
            <div style={{ alignSelf: "flex-start", marginLeft: "1rem", width: "90%"}}>
            <Typography
                variant="subtitle2"
                style={{ color: "#0d645e", fontWeight: 'bold' }}
            >
                First Name
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#d1d1d1" }}>
            <Typography
                variant="subtitle1"
                style={{ color: "#e1e1e1", fontWeight: 'bold', marginTop: "0.25rem" }}
            >
                {currentUser.firstName}
            </Typography>
            <EditIcon />
            </div>
            <Typography
                variant="subtitle2"
                style={{ color: "#0d645e", fontWeight: 'bold' }}
            >
                Last Name
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#d1d1d1" }}>
            <Typography
                variant="subtitle1"
                style={{ color: "#e1e1e1", fontWeight: 'bold', marginTop: "0.25rem" }}
            >
                {currentUser.lastName}
            </Typography>
            <EditIcon />
            </div>
            <Typography
                variant="subtitle2"
                style={{ color: "#0d645e", fontWeight: 'bold' }}
            >
                Username
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#d1d1d1" }}>
            <Typography
                variant="subtitle1"
                style={{ color: "#e1e1e1", fontWeight: 'bold', marginTop: "0.25rem" }}
            >
                {currentUser.username}
            </Typography>
            <EditIcon />
            </div>
            <Typography
                variant="subtitle2"
                style={{ color: "#0d645e", fontWeight: 'bold' }}
            >
                Email
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#d1d1d1" }}>
            <Typography
                variant="subtitle1"
                style={{ color: "#e1e1e1", fontWeight: 'bold', marginTop: "0.25rem" }}
            >
                {currentUser.email}
            </Typography>
            <EditIcon />
            </div>
            <Typography
                variant="subtitle2"
                style={{ color: "#0d645e", fontWeight: 'bold' }}
            >
                Status
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#d1d1d1" }}>
            <Typography
                variant="subtitle1"
                style={{ color: "#e1e1e1", fontWeight: 'bold', marginTop: "0.25rem" }}
            >
                {currentUser.status}
            </Typography>
            <EditIcon />
            </div>
            </div>
            <Button
                type="submit"
                variant="outlined"
                fullWidth
                color="success"
                >
                Save
            </Button>
            <Button
                variant="outlined"
                fullWidth
                color="info"
                onClick={() => dispatch(changeUserThemeAction(isLight ? 'dark' : 'light'))}
            >
                {isLight ? 'Dark Theme' : 'Light Theme'}
            </Button>
            <Button
                variant="outlined"
                fullWidth
                color="error"
                onClick={handleLogOut}
            >
                Log Out
            </Button>
        </Stack>
        )}
        </>
    )
}