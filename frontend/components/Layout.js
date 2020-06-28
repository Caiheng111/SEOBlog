import React,{Fragment} from 'react'

 const Layout = (props) => {
  return (
    <Fragment>
      <h1>Header</h1>
          {props.children}
      <h1>Footer</h1>
      
    </Fragment>
  )
}

export default Layout
