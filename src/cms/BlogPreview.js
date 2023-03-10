import React from 'react'
import BlogPost from './BlogTemplate'
import remarkHTML from 'remark-html'
import { remark } from 'remark'

const toHTML = value => remark().use(remarkHTML).processSync(value).toString()

const BlogPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const body = entry.getIn(['data', 'body'])
  const asHTML = toHTML(body)
  return <BlogPost data={data} body={asHTML} />
}

export default BlogPreview
