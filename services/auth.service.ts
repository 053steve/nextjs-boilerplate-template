import {auth} from '../client/api';
import { AuthRequest } from '../client/model';
import {setCookie, destroyCookie} from 'nookies';
import { AUTH_TOKEN, AUTH_USER, COOKIE_SETTINGS } from '../constants';
import Router from "next/router";

export const login = async (credentials: AuthRequest) => {

    const {token, user} = await auth(credentials);
    if (token && user) {
        setCookie(null, AUTH_TOKEN, token, COOKIE_SETTINGS);
        setCookie(null, AUTH_USER, user.id, COOKIE_SETTINGS);
    }

    return {token, user};

}

export const logout = () => {
    destroyCookie(null, AUTH_TOKEN);
    destroyCookie(null, AUTH_USER);
}