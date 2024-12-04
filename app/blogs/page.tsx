
import React from 'react'


import AllBlogs from '@/components/allblogs/AllBlogs'
import Headersection from '@/components/headersection/HeaderSection'
const page = async({ params }: any) => {
  return (
    <div>
        <Headersection title="Blogs" subtitle="Recent Updates and Blogs"/>
        <AllBlogs/>
    </div>
  )
}

export default page