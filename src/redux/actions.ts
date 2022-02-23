export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN',
    SELECTED_CONVERSATION: 'SELECTED_CONVERSATION',
    ADD_MY_INFO_TO_CURRENT_USER: 'ADD_MY_INFO_TO_CURRENT_USER',
    CHANGE_SIDEBAR_VIEW: 'CHANGE_SIDEBAR_VIEW',
    ADD_TO_CONVERSATIONS_ARRAY: 'ADD_TO_CONVERSATIONS_ARRAY',
    LOG_OUT_USER: 'LOG_OUT_USER',
    CHANGE_USER_THEME: 'CHANGE_USER_THEME',
    ADD_ANOTHER_CONVERSATION_TO_CONVERSATION_ARRAY: 'ADD_ANOTHER_CONVERSATION_TO_CONVERSATION_ARRAY'
}   

export const userLoginAction = () => ({
    type: ACTIONS.USER_LOGIN,
}) 

export const selectConversationAction = (contact: IUser) => ({
    type: ACTIONS.SELECTED_CONVERSATION,
    payload: contact
})

export const addMyInfoToCurentUser = (myInfo: IUser) => ({
    type: ACTIONS.ADD_MY_INFO_TO_CURRENT_USER,
    payload: myInfo
})

export const changeSidebarViewAction = (view: string) => ({
    type: ACTIONS.CHANGE_SIDEBAR_VIEW,
    payload: view
})

export const addToConversationArray = (conversations: IUser[]) => ({
    type: ACTIONS.ADD_TO_CONVERSATIONS_ARRAY,
    payload: conversations
})

export const addAnotherConversationToConversationArray = (conversation: IUser) => ({
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