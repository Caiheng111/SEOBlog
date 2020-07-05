import React,{useEffect} from 'react'
import Router from 'next/router'
import {isAuth} from '../../actions/auth'

const Admin = (props) => { 

  useEffect(() => {
      if(!isAuth()){
        Router.push(`/signin`)
      }else if(isAuth().role !==1){
        Router.push(`/`)
      }
  },[])
  return (
    <div>
     {props.children}
    </div>
  )
}
export default Admin