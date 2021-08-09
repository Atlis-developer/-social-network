import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer"
import { dialogsReducer } from "./dialogs-reducer"
import { navbarReducer } from "./navbar-reducer"
import { usersReducer } from "./usersSeach-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux"
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store