
import { useRouter } from "next/router"
import { useEffect } from "react"
import { parseCookies } from 'nookies'




export function AuthGaurd({ children }: { children: JSX.Element }) {

    const router = useRouter();
    let isClient = false;

    // Parse
    const cookies = parseCookies();
    const {auth_token} = cookies

    // use effect will only work in client, in this case we must check first isClient before rendering or else it will send a irritable warning.
    useEffect(() => {
        isClient = true;
        if (!auth_token) {
            // redirect
            router.push('/')
        }
    }, [auth_token, isClient]);

    return (
        !auth_token && isClient ? <h1>Loading ...</h1> : <>{children}</>

    )
}