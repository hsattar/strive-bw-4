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
    conversations: IReduxStoreConversations
}

interface IReduxStoreUser {
    isLoggedIn: boolean
    currentUser: IUser | null
}

interface IReduxStoreConversations {
    selected: any
    currentlyViewing: string
    all: any
}

interface IUser {
    _id: string,
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    contacts: string[]
    conversations: string[]
    avatar: string
    refreshJWTs: string[]
    filename: string
}