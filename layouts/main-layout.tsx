import Alert from '../components/Alert';
import {AuthProvider} from '../context/auth-context';
import {GlobalProvider} from '../context/global-context';

export default function MainLayout({children}) {
    return (
        <GlobalProvider>
            <AuthProvider>
                <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                    <Alert></Alert>
                    {children}
                </div>
            </AuthProvider>
        </GlobalProvider>
    )
}