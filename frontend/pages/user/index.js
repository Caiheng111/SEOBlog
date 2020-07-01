import React from 'react'
import Layout from '../../components/Layout'
import Private from '../../components/auth/Private'

 const UserIndex = () => { 
  return (
    <div>
      <Layout>
        <Private>
           <h1>User dashboard</h1>
        </Private> 
      </Layout>
    </div>
  )
}
export default UserIndex