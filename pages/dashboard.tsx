import type { NextPage } from 'next'
import AdminLayout from '../components/admin-layout';

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
