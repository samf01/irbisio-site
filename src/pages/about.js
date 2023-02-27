import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'

const Home = ({ data }) => {
  const { about, team, partners } =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <GatsbySeo title="About Us" />

      <GridContent
        id="about"
        layout="--center-4"
        mode={about.mode}
        background={about.image}
      >
        <h4>{about.section}</h4>
        <h1>{about.title}</h1>
        <p className="markdown" style={{ fontSize: '28px', lineHeight: '1' }}>
          {about.sub_title}
        </p>
        <p className="markdown">{about.body}</p>
      </GridContent>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "about" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              partners {
                details {
                  body
                  button {
                    label
                    link
                  }
                  logo {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                mode
                section
                image {
                  publicURL
                }
              }
              team {
                member {
                  body
                  name
                  photo {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  title
                }
                image {
                  publicURL
                }
                mode
                section
              }
              about {
                body
                mode
                section
                sub_title
                title
                image {
                  publicURL
                }
                button {
                  label
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`
