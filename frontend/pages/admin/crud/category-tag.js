import React from 'react'
import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import Category from '../../../components/crud/Category'

 const CategoryTag = () => { 
  return (
    <div>
      <Layout>
        <Admin>
          <div className="container-fluid">
            <h2>Manage Category Tag</h2>
            <div className="row">
              <div className="col-md-4 pt-5 pb-5">
                <Category/>
              </div>
              <div className="col-md-8 pt-5 pb-5">
                tag
              </div>
            </div>
          </div>
        </Admin>
      </Layout>
    </div>
  )
}
export default CategoryTag