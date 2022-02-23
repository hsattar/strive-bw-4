import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import conversationsReducer from "./reducers/conversationsReducer"
import userReducer from "./reducers/userReducer"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    user: {
        isLoggedIn: false,
        currentUser: null,
    },
    conversations: {
        selected: null,
        currentlyViewing: 'conversations',
        all: []
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    conversations: conversationsReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))