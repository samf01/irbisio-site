import { graphql, Link } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'

const Fund = ({ data }) => {
  const url = `${data.site.siteUrl}${data.markdownRemark.fields.slug}`
  const { title, logo, brand, sub_heading, opportunity, stats, section } =
    data.markdownRemark.frontmatter

  return (
    <Layout>
      <GatsbySeo title={title} canonical={url} />
      <GridContent layout="--center-4" mode="dark-mode">
        <h4>Fund</h4>
        <img src={brand.publicURL} alt={title} style={{ width: '100%' }} />
        <h6>{sub_heading}</h6>
        <h4>opportunity</h4>
        <p>{opportunity}</p>
      </GridContent>
      <GridContent layout="--center-6" mode="light-mode" hide="true">
        {stats.map((stat, i) => {
          return (
            <div
              key={stat.name}
              style={{ alignSelf: i % 2 === 1 && 'flex-end' }}
            >
              <h4 style={{ margin: '0' }}>{stat.name}</h4>
              <h1 className="h0">{stat.main}</h1>
              <p>
                <small>{stat.subscript}</small>
              </p>
            </div>
          )
        })}
      </GridContent>
      <GridContent layout="--center-4" mode="dark-mode">
        {section.map(node => {
          return (
            <div key={node.title}>
              <h4>{node.title}</h4>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  flexDirection:
                    node.order === 'last' ? 'column-reverse' : 'column',
                }}
              >
                {node.statement && (
                  <p style={{ margin: '12px 0' }}>{node.statement}</p>
                )}
                <ul>
                  {node.list.map((item, i) => {
                    return <li key={i}>{item.point}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
        <Link to="/strategy/#funds">Back to Funds</Link>
      </GridContent>
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
        logo {
          publicURL
        }
        brand {
          publicURL
        }
        sub_heading
        opportunity
        stats {
          name
          main
          subscript
        }
        section {
          order
          title
          statement
          list {
            point
          }
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
