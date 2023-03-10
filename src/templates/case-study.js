import { graphql, Link } from 'gatsby'
import '../components/UI/news/case-study.css'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'
import { AnimatedStatistic } from '../components/UI/news/animations'

const CaseStudy = ({ data }) => {
  const url = `${data.site.siteUrl}${data.markdownRemark.fields.slug}`
  const { title, stats } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <GatsbySeo title={title} canonical={url} />
      <GridContent layout="--center-6" mode="dark-mode" hide="true">
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} className="markdown" />

        {stats && //Because there might not be any?
          stats.map((stat, i) => {
            return <AnimatedStatistic stat={stat} key={i} />
          })}
        <Link to="/case-studies" className="mock-button">
          Back to Case Studies
        </Link>
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
        stats {
          prefix
          suffix
          value
          description
        }
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
