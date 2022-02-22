import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import { addMyInfoToCurentUser } from '../redux/actions'

interface IProps {
    children: JSX.Element
}

export default function PrivateRoute({ children }: IProps) {
    
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)
    const { axiosRequest } = useAxios()

    const fetchMyInfo = async () => {
        const response = await axiosRequest('/users/me', 'GET')
        dispatch(addMyInfoToCurentUser(response.data))
    }

    if (isLoggedIn) fetchMyInfo()

    return isLoggedIn ? children : <Navigate to="/login" />
}
