import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {actionTypes} from '../constants/actions'
import {AUTH_TOKEN, COOKIE_SETTINGS} from '../../constants';
import {AuthType, AuthApiFactory, AuthPayload} from '../../client/api';
import {
    authenticated,
    // signOutSuccess,
    // signUpSuccess,

} from "../actions/auth";
import {showAlertMessage, showErrorMessage} from '../actions/common';
import Router from 'next/router'
import { setCookie } from 'nookies'
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
            Router.push('/dashboard');
        } catch (error: any) {
            yield put(showErrorMessage(error.message));
        }
    });
}

export function* authenticateProcess() {
    yield takeEvery(actionTypes.AUTHENTICATED, function* ({ token }) {
        // Set
        setCookie(null, AUTH_TOKEN, token, COOKIE_SETTINGS);
    });
}

export default function* rootSaga() {
    yield all([
        fork(signInWithEmail),
        fork(authenticateProcess)
    ]);
}