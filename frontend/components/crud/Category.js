import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {isAuth, getCookie} from '../../actions/auth'
import { create, getCategories, removeCategory } from '../../actions/category';

const category = ()=>{
  const [values, setvalues]=useState({
      name:'',
      error: false,
      success:'',
      categories:[],
      removed:false
   })

   const {name,error, success, categories, removed} = values
   const token = getCookie('token')

   const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" className="form-control" onChange={handleChange} value={name} required />
        </div>
        <div>
            <button type="submit" className="btn btn-primary">
                Create
            </button>
        </div>
    </form>
)





}

 const Category = () => {
  return (
    <div>
      
    </div>
  )
}

export default Category
