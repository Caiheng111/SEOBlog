import React,{Fragment} from 'react'
import Link from 'next/link'

 const Signin = () => {
  return (
    <Fragment>
      <h1> sign in </h1> 
      <Link href="/">
        <a>Home</a>  
      </Link>
      <h1>Footer</h1>
    </Fragment>
  ) 
}

export default Signin