interface IUserCredentials {
    username: string
    password: string
}

interface IUserDetails extends IUserCredentials {
    firstName: string
    lastName: string
    email: string
    confirmPassword: string
}

interface IReduxStore {
    user: IReduxStoreUser
}

interface IReduxStoreUser {
    isLoggedIn: boolean
    currentUser: any
}