
import {AuthProvider} from '../context/auth-context';
import {GlobalProvider} from '../context/global-context';

export default function AppProviders({ children }) {
  return (
    <GlobalProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </GlobalProvider>
  );
}
