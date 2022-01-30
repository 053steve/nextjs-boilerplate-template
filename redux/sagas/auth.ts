import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {actionTypes} from '../constants/actions'
import {AuthApi, AuthType} from '../../client/api';
import {
    // authenticated,
    // signOutSuccess,
    // signUpSuccess,
    showAuthMessage
} from "../actions/auth";

export function* signUpWithEmail() {
    yield takeEvery(actionTypes.SIGNUP, function* ({ payload }) {
        const { username, password } = payload;
        try {
            new AuthApi().auth({username, password, authType: AuthType.Standard})
            yield put(showAuthMessage('saga working'));
        } catch (error) {
            yield put(showAuthMessage(error));
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(signUpWithEmail),
    ]);
}