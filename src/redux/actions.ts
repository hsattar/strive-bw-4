export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN',
    SELECT_CONTACT: 'SELECT_CONTACT',
    ADD_MY_INFO_TO_CURRENT_USER: 'ADD_MY_INFO_TO_CURRENT_USER'
}

export const userLoginAction = () => ({
    type: ACTIONS.USER_LOGIN,
}) 

export const selectContactAction = (contact: any) => ({
    type: ACTIONS.SELECT_CONTACT,
    payload: contact
})

export const addMyInfoToCurentUser = (myInfo: any) => ({
    type: ACTIONS.ADD_MY_INFO_TO_CURRENT_USER,
    payload: myInfo
})

// export const userLoginAction = (userInfo: any): ThunkAction<any, typeof initialState, unknown, AnyAction> => async dispatch => 
