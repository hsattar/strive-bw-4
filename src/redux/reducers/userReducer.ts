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
        default: return state
    }
}

export default userReducer