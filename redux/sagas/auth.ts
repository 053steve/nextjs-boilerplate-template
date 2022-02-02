import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {actionTypes} from '../constants/actions'
import {AUTH_TOKEN} from '../../constants';
import {AuthApi, AuthType, AuthApiFactory} from '../../client/api';
import {
    // authenticated,
    // signOutSuccess,
    signUpSuccess,
    showAuthMessage
} from "../actions/auth";
import axios from "axios";
import httpService from "../../services/http.service";

const authApi = new httpService().interceptorMiddleware(AuthApiFactory);

export function* signInWithEmail() {

    yield takeEvery(actionTypes.SIGNIN, function* ({ payload }) {
        const { username, password } = payload;

        try {

            const result = yield call(authApi.auth, {username, password, authType: AuthType.Standard});

            console.log(result);
            // localStorage.setItem(AUTH_TOKEN, user.user.uid);
            yield put(signUpSuccess('saga working'));

        } catch (error) {
            yield put(showAuthMessage(error));
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(signInWithEmail),
    ]);
}