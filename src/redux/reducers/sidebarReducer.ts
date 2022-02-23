import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const sidebarReducer = (state = initialState.sidebar, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.SELECTED_CONVERSATION: return {
            ...state,
            conversationSelected: action.payload
        }
        case ACTIONS.CHANGE_SIDEBAR_VIEW: return {
            ...state,
            currentlyViewing: action.payload
        }
        case ACTIONS.ADD_TO_CONVERSATIONS_ARRAY: return {
            ...state,
            allConversations: action.payload
        }
        default: return state
    }
}

export default sidebarReducer