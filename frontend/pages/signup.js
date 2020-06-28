import React,{Fragment} from 'react'
import Link from 'next/link'
import SignupComponent from '../components/auth/SignupComponent'
import Layout from '../components/Layout'

 const Signup = (props) => {
  return (
    <Fragment>
      <Layout>
        <SignupComponent/>
      </Layout>
    </Fragment>
  ) 
}

export default Signup