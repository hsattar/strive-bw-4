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
    sidebar: IReduxStoreConversations
}

interface IUser {
    _id:           string
    username:      string
    email:         string
    avatar:        string
    firstName:     string
    lastName:      string
    contacts:      string[]
    conversations: string[] | IConversation[]
    status:        string
    lastSeen:      date
    createdAt:     date
    updatedAt:     date
}

interface IConversation {
    _id: string
    chatHistory: IConversation[]
    members: IUser[]
}

interface IConversation {
	sender: Types.ObjectId
	image?: string
	text?: string
	_id: string
	createdAt: date
	updatedAt: date
}

interface IReduxStoreUser {
    isLoggedIn: boolean
    currentUser: IUser | null
}

interface IText {
    text: string
    currentUser: IUser | null
}

interface IReduxStoreSidebar {
    conversationSelected: IUser | null
    currentlyViewing: string
    all: IUser[]
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