import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const conversationsReducer = (state = initialState.conversations, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.SELECTED_CONVERSATION: return {
            ...state,
            selected: action.payload
        }
        case ACTIONS.CHANGE_SIDEBAR_VIEW: return {
            ...state,
            currentlyViewing: action.payload
        }
        default: return state
    }
}

export default conversationsReducer