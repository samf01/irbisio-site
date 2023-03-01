import { graphql, Link } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'

const Fund = ({ data }) => {
  const url = `${data.site.siteUrl}${data.markdownRemark.fields.slug}`
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <GatsbySeo title={title} canonical={url} />
      <div className="grid-content--center-4">
        <div>
          <h1>{title}</h1>
        </div>

        <Link to="/blog">Back to Articles</Link>
      </div>
    </Layout>
  )
}

Fund.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Fund

export const pageQuery = graphql`
  query FundByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
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
