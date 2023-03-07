import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import GridContent from '../components/UI/grid-content'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <GatsbySeo title={frontmatter.slug} />
      <GridContent layout="--center-6" mode="dark-mode" hide="true">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Link className="footer mock-button" to="/">
          Agree & Close
        </Link>
      </GridContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
