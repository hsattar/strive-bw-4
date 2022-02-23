import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import sidebarReducer from "./reducers/sidebarReducer"
import userReducer from "./reducers/userReducer"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    user: {
        isLoggedIn: false,
        currentUser: null,
    },
    sidebar: {
        conversationSelected: null,
        currentlyViewing: 'conversations',
        allConversations: []
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))