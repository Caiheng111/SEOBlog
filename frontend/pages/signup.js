import React,{Fragment} from 'react'
import Link from 'next/link'

 const Signup = (props) => {
  return (
    <Fragment>
      <h1> Sign UP </h1>  
      <Link href="/">
        <a>Home</a>
      </Link>   
      <h1>Footer</h1>  
    </Fragment>
  ) 
}

export default Signup