import React from 'react'
import Layout from '../../components/Layout'
import Admin from '../../components/auth/Admin'
import Link from 'next/link'

 const AdminIndex = () => { 
  return (
    <div>
      <Layout>
        <Admin>
          <div className="container-fluid">
            <h2>Admin dashboard</h2>
            <div className="row">
              <div className="col-md-4 pt-5 pb-5">
              <ul class="list-group">
                <li class="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a> Create Category</a>
                  </Link>
                </li>
              </ul>
              </div>
              <div className="col-md-8 pt-5 pb-5">
                right
              </div>
            </div>
          </div>
        </Admin>
      </Layout>
    </div>
  )
}
export default AdminIndex