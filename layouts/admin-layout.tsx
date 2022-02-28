import AppProviders from '../components/AppProviders';

export default function AdminLayout({children}) {
  return (
      <AppProviders>
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
          admin layout
          {children}
        </div>
      </AppProviders>
  )
}