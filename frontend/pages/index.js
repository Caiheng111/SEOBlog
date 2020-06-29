import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

 const index = () => {
  return (
    <div>
      <Layout>
         <h1>Index page</h1>
         <Link href="/signup">
           <a>Sign UP</a>
         </Link>
      </Layout>
    </div>
  )
}
export default index