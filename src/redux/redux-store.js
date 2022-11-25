import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;