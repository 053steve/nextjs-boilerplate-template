import {actionTypes} from '../constants/actions';
import {CommonState} from "../../interfaces/data.interface";
import { AUTH_TOKEN } from '../../constants';

const initState: CommonState = {
    loading: false,
    message: "",
    showMessage: false
};



const common = (state = initState, action: any): CommonState => {

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

export default common;
