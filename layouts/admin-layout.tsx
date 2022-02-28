import {AuthProvider} from '../context/auth-context';
import {GlobalProvider} from '../context/global-context';

export default function AdminLayout({children}) {
  return (
    <GlobalProvider>
        <AuthProvider>
            <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                admin layout
                {children}
            </div>
        </AuthProvider>
    </GlobalProvider>

  )
}