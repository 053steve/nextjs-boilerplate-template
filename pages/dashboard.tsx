import type { NextPage } from 'next'
import AdminLayout from '../layouts/admin-layout';
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
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
            Dashboard
        </h1>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>

  )
}

export default Dashboard
