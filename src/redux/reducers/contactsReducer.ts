import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const contactsReducer = (state = initialState.contacts, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.SELECT_CONTACT: return {
            ...state,
            selected: action.payload
        }
        default: return state
    }
}

export default contactsReducer