import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../interfaces/data.interface';
import { useRouter } from "next/router"
import { useEffect } from "react"



export function AuthGaurd({ children }: { children: JSX.Element }) {

    const auth = useSelector((state: AppState) => state.auth);
    const {authUser, redirect} = auth;
    const router = useRouter()


    useEffect(() => {
        if (!authUser) {
            // redirect
            router.push('/')
        }
    }, [authUser, redirect])



    return (
        authUser ? <>{children}</> : <h1>Loading ...</h1>

    )
}