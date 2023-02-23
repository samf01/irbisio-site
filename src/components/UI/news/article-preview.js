import { Link } from 'gatsby'
import React from 'react'

const PreviewArticle = ({ article }) => {
  const date = new Date()
  return (
    <div className="article-preview">
      <h4>
        {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
      </h4>
      <h2>{article.heading}</h2>
      <p>{article.extract}</p>
      <Link to="/" style={{ alignSelf: 'flex-end', paddingBottom: '8px' }}>
        Read More
      </Link>
    </div>
  )
}

export default PreviewArticle
