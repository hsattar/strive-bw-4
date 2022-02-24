declare module 'react-scroll-to-bottom'

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
    sidebar: IReduxStoreSidebar
}

interface IUser {
    _id: string
    username: string
    email: string
    avatar: string
    firstName: string
    lastName: string
    contacts: string[]
    conversations: IConversation[]
    status: string
    lastSeen: date
    createdAt: date
    updatedAt: date
}

interface IConversation {
    _id: string
    chatHistory: IMessage[]
    members: IUser[]
    name: string
}

interface IMessage {
    senderId: string
    // image?: string
    messageContent: string
    // _id: string
    sentAt: date
}

interface IReduxStoreUser {
    isLoggedIn: boolean
    currentUser: IUser | null
    theme: 'dark' | 'light'
}

interface IText {
    text: string
    currentUser: IUser | null
}

interface IReduxStoreSidebar {
    conversationSelected: IConversation | null
    currentlyViewing: 'conversations' | 'users' | 'new-message' | 'settings'
    allConversations: IConversation[],
    contacts: IUser[]
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