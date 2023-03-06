import React from 'react'
import BlogPost from './BlogTemplate'

const BlogPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return <BlogPost data={data} />
}

export default BlogPreview
