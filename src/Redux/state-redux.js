import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer"
import { dialogsReducer } from "./dialogs-reducer"
import { navbarReducer } from "./navbar-reducer"
import { usersReducer } from "./usersSeach-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store