import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const userReducer = (state = initialState.user, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.USER_LOGIN: return {
            ...state,
            isLoggedIn: true
        }
        case ACTIONS.ADD_MY_INFO_TO_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        case ACTIONS.LOG_OUT_USER: return {
            ...state,
            isLoggedIn: false,
            currentUser: null
        }
        case ACTIONS.CHANGE_USER_THEME: return {
            ...state,
            theme: action.payload
        }
        case ACTIONS.CLEAR_USER_INFO: return {
            isLoggedIn: false,
            currentUser: null,
            theme: 'dark'
        }
        default: return state
    }
}

export default userReducer