import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import axios from 'axios'

const { REACT_APP_BE_URL } = process.env 

export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN',
    SELECTED_CONVERSATION: 'SELECTED_CONVERSATION',
    ADD_MY_INFO_TO_CURRENT_USER: 'ADD_MY_INFO_TO_CURRENT_USER',
    CHANGE_SIDEBAR_VIEW: 'CHANGE_SIDEBAR_VIEW',
    ADD_TO_CONVERSATIONS_ARRAY: 'ADD_TO_CONVERSATIONS_ARRAY',
    LOG_OUT_USER: 'LOG_OUT_USER',
    CHANGE_USER_THEME: 'CHANGE_USER_THEME',
    ADD_ANOTHER_CONVERSATION_TO_CONVERSATION_ARRAY: 'ADD_ANOTHER_CONVERSATION_TO_CONVERSATION_ARRAY',
    ADD_MESSAGE_TO_CONVERSATION: 'ADD_MESSAGE_TO_CONVERSATION',
    ADD_TO_LIST_OF_CONTACTS: 'ADD_TO_LIST_OF_CONTACTS',
    ADD_ANOTHER_CONTACT_TO_THE_LIST: 'ADD_ANOTHER_CONTACT_TO_THE_LIST'
}

export const userLoginAction = () => ({
    type: ACTIONS.USER_LOGIN,
})

export const selectConversationAction = (conversation: IConversation) => async (dispatch: ThunkDispatch<Action, any, any>) => {
    const response = await axios.get(`${REACT_APP_BE_URL}/conversations/${conversation._id}`, { withCredentials: true })
    const latestConvo = {
        ...conversation,
        chatHistory: response.data.chatHistory
    }
    dispatch({
        type: ACTIONS.SELECTED_CONVERSATION,
        payload: latestConvo
    })
}

export const addMyInfoToCurentUser = (myInfo: IUser) => ({
    type: ACTIONS.ADD_MY_INFO_TO_CURRENT_USER,
    payload: myInfo
})

export const changeSidebarViewAction = (view: string) => ({
    type: ACTIONS.CHANGE_SIDEBAR_VIEW,
    payload: view
})

export const addToConversationArray = (conversations: IConversation[]) => ({
    type: ACTIONS.ADD_TO_CONVERSATIONS_ARRAY,
    payload: conversations
})

export const addAnotherConversationToConversationArray = (conversation: IConversation) => ({
    type: ACTIONS.ADD_ANOTHER_CONVERSATION_TO_CONVERSATION_ARRAY,
    payload: conversation
})

export const logOutUserAction = () => ({
    type: ACTIONS.LOG_OUT_USER
})

export const changeUserThemeAction = (theme: string) => ({
    type: ACTIONS.CHANGE_USER_THEME,
    payload: theme
})

export const addMessageToConversationAction = (message: IMessage) => ({
    type: ACTIONS.ADD_MESSAGE_TO_CONVERSATION,
    payload: message
})

export const addToListOfContactsAction = (contacts: IUser[]) => ({
    type: ACTIONS.ADD_TO_LIST_OF_CONTACTS,
    payload: contacts
})

export const addAnotherContactToListOfContactsAction = (contact: IUser) => ({
    type: ACTIONS.ADD_ANOTHER_CONTACT_TO_THE_LIST,
    payload: contact
})