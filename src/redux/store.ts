import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import contactsReducer from "./reducers/contactsReducer"
import userReducer from "./reducers/userReducer"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    user: {
        isLoggedIn: false,
        currentUser: null,
    },
    contacts: {
        selected: null
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    contacts: contactsReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))