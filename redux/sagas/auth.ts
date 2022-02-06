import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {actionTypes} from '../constants/actions'
import {AUTH_TOKEN} from '../../constants';
import {AuthType, AuthApiFactory, AuthPayload} from '../../client/api';
import {
    authenticated,
    // signOutSuccess,
    // signUpSuccess,
    showAuthMessage
} from "../actions/auth";
import axios from "axios";
import ApiService from '../../services/api.service';

const apiService = new ApiService();

export function* signInWithEmail() {

    yield takeEvery(actionTypes.SIGNIN, function* ({ payload }) {
        const { username, password } = payload;

        try {

            const authService = apiService.authService();
            const result = yield call(authService.auth, {username, password, authType: AuthType.Standard});
            yield put(authenticated(result.token));
            yield put(showAuthMessage("Success"));

        } catch (error) {
            yield put(showAuthMessage(error));
        }
    });
}

export function* authenticateProcess() {
    console.log('got here');
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