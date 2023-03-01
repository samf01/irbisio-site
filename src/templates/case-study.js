import { graphql, Link } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'

const CaseStudy = ({ data }) => {
  const url = `${data.site.siteUrl}${data.markdownRemark.fields.slug}`
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <GatsbySeo title={title} canonical={url} />
      <GridContent layout="--center-4" mode="dark-mode">
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/case-studies">Back to Case Studies</Link>
      </GridContent>
    </Layout>
  )
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CaseStudy

export const pageQuery = graphql`
  query FundByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      html
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
