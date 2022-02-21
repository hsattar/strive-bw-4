import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { initialState } from "./store"
import axios from 'axios'

const { REACT_APP_BE_URL: BASE_URL } = process.env

export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN'
}

export const userLoginAction = () => ({
    type: ACTIONS.USER_LOGIN,
}) 

// export const userLoginAction = (userInfo: any): ThunkAction<any, typeof initialState, unknown, AnyAction> => 
// async dispatch => {
//     try {
//         const { data } = await axios.post(`${BASE_URL}/users/login`, userInfo)
//         dispatch({
//             type: ACTIONS.USER_LOGIN,
//             payload: data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }