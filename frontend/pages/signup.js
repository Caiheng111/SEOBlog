import React,{Fragment} from 'react'
import Link from 'next/link'
import SignupComponent from '../components/auth/SignupComponent'
import Layout from '../components/Layout'

 const Signup = (props) => {
  return (
    <Fragment>
      <Layout>
      <h2 className="text-center pt-4 pb-4"></h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
              <SignupComponent/>
          </div>
        </div>

      </Layout>
    </Fragment>
  ) 
}

export default Signup