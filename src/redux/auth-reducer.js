import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export const setAuth = () => {
    return (dispatch) => {
        usersAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {userId, login, email} = data.data;
                    dispatch(setAuthUserData(userId, login, email));
                }
            });
    }
}

export default authReducer;