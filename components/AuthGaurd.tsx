import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../interfaces/data.interface';
import { useRouter } from "next/router"
import { useEffect } from "react"
import { parseCookies } from 'nookies'




export function AuthGaurd({ children }: { children: JSX.Element }) {

    const auth = useSelector((state: AppState) => state.auth);
    // const {authUser, redirect} = auth;
    const router = useRouter();


    // Parse
    const cookies = parseCookies();
    const {auth_token} = cookies


    useEffect(() => {
        if (!auth_token) {
            // redirect
            router.push('/')
        }
    }, [auth_token]);

    return (
        !auth_token ? <h1>Loading ...</h1> : <>{children}</>

    )
}