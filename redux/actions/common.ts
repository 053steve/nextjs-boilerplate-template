import { ALERT_TYPE } from '../../interfaces/data.interface';
import {actionTypes} from '../constants/actions';


export const showAlertMessage = (alertMsg: string, alertType: ALERT_TYPE) => {
    return {
        type: actionTypes.SHOW_AUTH_MESSAGE,
        alertMsg,
        alertType
    };
};

export const showErrorMessage = (alertMsg: string) => {

    return {
        type: actionTypes.SHOW_AUTH_MESSAGE,
        alertMsg,
        alertType: ALERT_TYPE.DANGER
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