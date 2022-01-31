import {actionTypes} from '../constants/actions';
import {AppState} from "../../interfaces/data.interface";
import { AUTH_TOKEN } from '../../constants';

const initState: AppState = {
    loading: false,
    message: "",
    showMessage: false,
    redirect: "",
    token: (typeof window !== 'undefined') ? localStorage.getItem(AUTH_TOKEN) : "",
};



const auth = (state = initState, action: any): AppState => {

    switch (action.type) {
        case actionTypes.AUTHENTICATED:
            return {
                ...state,
                loading: false,
                redirect: "/",
                token: action.token,
            };
        case actionTypes.SIGNIN:
            return {
                ...state
            };
        case actionTypes.SHOW_AUTH_MESSAGE:
            return {
                ...state,
                message: action.message,
                showMessage: true,
                loading: false,
            };
        case actionTypes.HIDE_AUTH_MESSAGE:
            return {
                ...state,
                message: "",
                showMessage: false,
            };
        case actionTypes.SIGNOUT_SUCCESS: {
            return {
                ...state,
                token: null,
                redirect: "/",
                loading: false,
            };
        }
        case actionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.token,
            };
        }
        case actionTypes.SHOW_LOADING: {
            return {
                ...state,
                loading: true,
            };
        }

        default:
            return state;
    }
};

export default auth;
