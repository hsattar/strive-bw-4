interface IUserCredentials {
    email: string
    password: string
}

interface IUserDetails extends IUserCredentials {
    firstName: string
    lastName: string
    username: string
    confirmPassword: string
}

interface IReduxStore {
    user: IReduxStoreUser
    contacts: IReduxStoreContacts
    conversations: IReduxStoreConversations
}

interface IReduxStoreUser {
    isLoggedIn: boolean
    currentUser: any
}

interface IReduxStoreContacts {
    selected: any
}

interface IReduxStoreConversations {
    conversations: any
}