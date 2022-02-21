import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface IProps {
    children: JSX.Element
}

export default function PrivateRoute({ children }: IProps) {
    
    const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)

    return isLoggedIn ? children : <Navigate to="/login" />
}
