import { graphql, Link } from 'gatsby'

import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'

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

      <GridContent layout="--center-6" hide="true" mode="dark-mode">
        <h4>News</h4>
        <h1>{title}</h1>
        <h4>
          Published {publishedDate.getDate()}.{publishedDate.getMonth()}.
          {publishedDate.getFullYear()}
        </h4>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Link to="/#news">Back to Articles</Link>
      </GridContent>
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
