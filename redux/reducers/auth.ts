import {actionTypes} from '../constants/actions';
import {AppState, AuthState} from "../../interfaces/data.interface";
import { AUTH_TOKEN } from '../../constants';

const initState: AuthState = {
    authUser: null,
    redirect: "",
    token: (typeof window !== 'undefined') ? localStorage.getItem(AUTH_TOKEN) : "",
};



const auth = (state = initState, action: any): AuthState => {

    switch (action.type) {
        case actionTypes.AUTHENTICATED:
            return {
                ...state,
                redirect: "/",
                token: action.token,
            };
        case actionTypes.SIGNIN:
            return {
                ...state
            };

        case actionTypes.SIGNOUT_SUCCESS: {
            return {
                ...state,
                token: null,
                redirect: "/",
            };
        }
        case actionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                token: action.token,
            };
        }

        default:
            return state;
    }
};

export default auth;
