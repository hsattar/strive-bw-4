import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const sidebarReducer = (state = initialState.sidebar, action: AnyAction) => {
    switch (action.type) {
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
        case ACTIONS.ADD_ANOTHER_CONVERSATION_TO_CONVERSATION_ARRAY: return {
            ...state,
            allConversations: [...state.allConversations, action.payload]
        }
        case ACTIONS.ADD_MESSAGE_TO_CONVERSATION: return {
            ...state,
            conversationSelected: {
                ...state.conversationSelected,
                chatHistory: [...state.conversationSelected?.chatHistory!, action.payload]
            }
        }
        case ACTIONS.ADD_TO_LIST_OF_CONTACTS: return {
            ...state,
            contacts: action.payload
        }
        case ACTIONS.ADD_ANOTHER_CONTACT_TO_THE_LIST: return {
            ...state,
            contacts: [...state.contacts, action.payload]
        }
        default: return state
    }
}

export default sidebarReducer