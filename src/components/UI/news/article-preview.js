import { Link } from 'gatsby'
import React from 'react'

const PreviewArticle = ({ article }) => {
  const date = new Date(article.date)
  console.log(article.title)
  return (
    <div className="article-preview">
      {article.date && (
        <h4>
          {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
        </h4>
      )}
      <h2>{article.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: article.excerpt }} />
      <Link
        to={article.slug}
        style={{ alignSelf: 'flex-end', paddingBottom: '8px' }}
      >
        Read More
      </Link>
    </div>
  )
}

export default PreviewArticle
