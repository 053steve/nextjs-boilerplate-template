import '../styles/globals.css'
import type {AppProps} from 'next/app'
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import {wrapper} from '../redux/store';
import {AuthGaurd} from '../components/AuthGaurd';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}


function App({Component, pageProps}: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);


    return getLayout(
        Component.requireAuth ?

                <AuthGaurd>
                    <Component {...pageProps} />
                </AuthGaurd>
            :
            <Component {...pageProps} />
    )
}

export default wrapper.withRedux(App)
