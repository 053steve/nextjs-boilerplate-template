import {actionTypes} from '../constants/actions';


export const signIn = (user: any) => {
    console.log("signIn user ", user)
    return {
        type: actionTypes.SIGNIN,
        payload: user,
    };
};

export const authenticated = (token: string, authUser) => {
    console.log("authenticated ", token)
    return {
        type: actionTypes.AUTHENTICATED,
        token,
        authUser
    };
};

export const signOut = () => {
    return {
        type: actionTypes.SIGNOUT,
    };
};

export const signOutSuccess = () => {
    return {
        type: actionTypes.SIGNOUT_SUCCESS,
    };
};

export const signUp = (user: any) => {
    return {
        type: actionTypes.SIGNUP,
        payload: user,
    };
};

export const signUpSuccess = (token: string) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        token,
    };
};

export const showAuthMessage = (message: string) => {
    return {
        type: actionTypes.SHOW_AUTH_MESSAGE,
        message,
    };
};

export const hideAuthMessage = () => {
    return {
        type: actionTypes.HIDE_AUTH_MESSAGE,
    };
};

export const showLoading = () => {
    return {
        type: actionTypes.SHOW_LOADING,
    };
};