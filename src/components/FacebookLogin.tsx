import { useEffect } from "react"
import useAxios from "../hooks/useAxios"
import { useDispatch } from "react-redux"
import { userLoginAction } from "../redux/actions"
import { useNavigate } from "react-router-dom"

const FacebookLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { axiosRequest } = useAxios()
    const authenticateUser = async () => {
        const response = await axiosRequest("/users/facebook-login", "POST")
        console.log(response)
        if (response.status === 200) {
            dispatch(userLoginAction())
            navigate("/")
        }
    }
    useEffect(() => {
        console.log("Im here")
        authenticateUser()
    }, [])
    return (
        <> </>
    )
}

export default FacebookLogin