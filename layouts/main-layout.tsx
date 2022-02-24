// import Alert from '../components/Alert';


export default function MainLayout({children}) {
    return (

        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            {/*<Alert></Alert>*/}
            {children}
        </div>
    )
}