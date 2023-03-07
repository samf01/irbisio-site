import React from 'react'

import GridContent from '../components/UI/grid-content'

const BlogPost = ({ data, body }) => {
  const { title, date } = data
  const publishedDate = new Date(date)
  return (
    <GridContent layout="--center-6" hide="true" mode="dark-mode">
      <h4>News</h4>
      <h1>{title}</h1>
      <h4>
        Published {publishedDate.getDate()}.{publishedDate.getMonth()}.
        {publishedDate.getFullYear()}
      </h4>

      <div dangerouslySetInnerHTML={{ __html: body }} />

      <a href="/#news">Back to Articles</a>
    </GridContent>
  )
}

export default BlogPost
