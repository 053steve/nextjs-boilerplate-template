import {actionTypes} from '../constants/actions';
import {CommonState} from "../../interfaces/data.interface";
import { AUTH_TOKEN } from '../../constants';

const initState: CommonState = {
    loading: false,
    message: "",
    showAlert: false
};



const common = (state = initState, action: any): CommonState => {

    switch (action.type) {
        case actionTypes.SHOW_AUTH_MESSAGE:
            return {
                ...state,
                alertMsg: action.alertMsg,
                alertType: action.alertType,
                showAlert: true,
                loading: false,
            };
        case actionTypes.HIDE_AUTH_MESSAGE:
            return {
                ...state,
                alertMsg: "",
                showAlert: false,
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
