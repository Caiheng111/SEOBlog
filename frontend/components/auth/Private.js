import React,{useEffect} from 'react'
import Router from 'next/router'
import isAuth from '../../actions/auth '

const Private = (props) => { 

  useEffect(() => {
      if(!isAuth){
        Router.push(`/signin`)
      }
  },[])
  return (
    <div>
     {propr.children}
    </div>
  )
}
export default Private