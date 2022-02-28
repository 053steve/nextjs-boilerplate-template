import type { NextPage } from 'next'
import AdminLayout from '../layouts/admin-layout';
import {logout} from '../services/auth.service';
import {useAuth} from '../context/auth-context';
import Router from "next/router";
// import nookies from 'nookies'


// [example] check user token before rendering page, if not then redirect to login (which is not recommended)
// export const getServerSideProps = async function (ctx) {
//
//     const cookies = nookies.get(ctx)
//
//     const {auth_token} = cookies;
//
//     if (!auth_token) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }
//
//     return {
//         props: {}
//     }
//
// }



const Dashboard = () => {

    const authState: any = useAuth();

    const logoutEvent = () => {
        logout();
        authState.dispatch({authenticated: false, user: null});
        Router.replace("/");
    }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
            Dashboard

          <button type="button" className="rounded-md" onClick={logoutEvent}>Logout Press Here</button>
        </h1>
    </div>
  )
}

Dashboard.requireAuth = true;
Dashboard.getLayout = function getLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>

  )
}

export default Dashboard
