import React,{Fragment} from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import SigninComponent from '../components/auth/SigninComponent'

 const Signin = () => {
  return (
    <Fragment>
      <Layout>
      <h2 className="text-center pt-4 pb-4"></h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
              <SigninComponent/>
          </div>
        </div>
      </Layout>
    </Fragment>
  ) 
}

export default Signin