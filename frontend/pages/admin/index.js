import React from 'react'
import Layout from '../../components/Layout'
import Admin from '../../components/auth/Admin'

 const AdminIndex = () => { 
  return (
    <div>
      <Layout>
        <Admin>
          <h1>Admin dashboard</h1>
        </Admin>
      </Layout>
    </div>
  )
}
export default AdminIndex