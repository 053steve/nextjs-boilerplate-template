import {actionTypes} from '../constants/actions';
import {AppState, SharedState} from "../../interfaces/data.interface";
import { AUTH_TOKEN } from '../../constants';

const initState: SharedState = {
    loading: false,
    message: "",
    showMessage: false
};



const app = (state = initState, action: any): SharedState => {

    switch (action.type) {
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

export default app;
