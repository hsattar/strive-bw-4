export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN',
    SELECTED_CONVERSATION: 'SELECTED_CONVERSATION',
    ADD_MY_INFO_TO_CURRENT_USER: 'ADD_MY_INFO_TO_CURRENT_USER',
    CHANGE_SIDEBAR_VIEW: 'CHANGE_SIDEBAR_VIEW'
}

export const userLoginAction = () => ({
    type: ACTIONS.USER_LOGIN,
}) 

export const selectConversationAction = (contact: any) => ({
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