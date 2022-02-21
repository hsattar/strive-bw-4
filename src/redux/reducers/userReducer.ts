import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const userReducer = (state = initialState.user, action: AnyAction) => {
    switch(action.type) {
        default: return state
    }
}

export default userReducer