import {actionTypes} from '../constants/actions';


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