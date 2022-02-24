import {auth} from '../client/api';
import { AuthRequest } from '../client/model';
import {setCookie} from 'nookies';
import { AUTH_TOKEN, COOKIE_SETTINGS } from '../constants';
import Router from "next/router";

export const login = async (credentials: AuthRequest) => {

    const {token} = await auth(credentials);
    if (token) {
        setCookie(null, AUTH_TOKEN, token, COOKIE_SETTINGS);
        Router.replace("/dashboard");

    }

}