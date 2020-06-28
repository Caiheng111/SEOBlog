import React,{Fragment} from 'react'
import Header from './Header'

 const Layout = (props) => {
  return (
    <Fragment>
      <Header/>
          {props.children}
      <h1>Footer</h1>
      
    </Fragment>
  ) 
}

export default Layout
