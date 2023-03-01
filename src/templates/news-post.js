import { graphql, Link } from 'gatsby'

import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'

const BlogPost = ({ data }) => {
  const url = `${data.site.siteUrl}${data.markdownRemark.fields.slug}`
  const { date, title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const publishedDate = new Date(date)

  return (
    <Layout>
      <GatsbySeo
        title={title}
        canonical={url}
        openGraph={{
          title,
          url,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: date,
          },
        }}
      />
      <ArticleJsonLd
        url={url}
        headline={title}
        datePublished={date}
        dateModified={date}
        publisherLogo={`${data.site.siteUrl}/logo.png`}
        overrides={{
          '@type': 'BlogPosting',
        }}
      />

      <div className="grid-content--center-4">
        <div>
          <h1>{title}</h1>
          <h4>
            Published {publishedDate.getDate()}.{publishedDate.getMonth()}.
            {publishedDate.getFullYear()}
          </h4>
        </div>

        <div className="mt-4">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Link to="/blog">Back to Articles</Link>
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date
        title
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`
