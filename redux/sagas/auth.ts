import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {actionTypes} from '../constants/actions'
import {AUTH_TOKEN} from '../../constants';
import {AuthType, AuthApiFactory, AuthPayload} from '../../client/api';
import {
    authenticated,
    // signOutSuccess,
    // signUpSuccess,

} from "../actions/auth";
import {showAlertMessage, showErrorMessage} from '../actions/common';

import axios from "axios";
import ApiService from '../../services/api.service';
import { ALERT_TYPE } from "../../interfaces/data.interface";

const apiService = new ApiService();

export function* signInWithEmail() {

    yield takeEvery(actionTypes.SIGNIN, function* ({ payload }) {
        const { username, password } = payload;

        try {

            const authService = apiService.authService();
            const result = yield call(authService.auth, {username, password, authType: AuthType.Standard});
            yield put(authenticated(result.token, result.user));
            yield put(showAlertMessage("Success", ALERT_TYPE.SUCCESS));

        } catch (error: any) {
            yield put(showErrorMessage(error.message));
        }
    });
}

export function* authenticateProcess() {
    yield takeEvery(actionTypes.AUTHENTICATED, function* ({payload}) {
        const token = payload;
        localStorage.setItem(AUTH_TOKEN, token);
    });
}

export default function* rootSaga() {
    yield all([
        fork(signInWithEmail),
        fork(authenticateProcess)
    ]);
}