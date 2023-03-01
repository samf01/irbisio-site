import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'
import PreviewArticle from '../components/UI/news/article-preview'

const CaseStudies = ({ data }) => {
  const articles = data.allMarkdownRemark.edges

  return (
    <Layout>
      <GatsbySeo title="Case Study Page" />

      <GridContent id="news" layout="--center-4" mode="dark-mode">
        <h4>case studies</h4>
        {articles.map((node, i) => {
          const article = {
            title: node.node.frontmatter.title,
            excerpt: node.node.excerpt,
            slug: node.node.fields.slug,
          }
          return <PreviewArticle key={i} article={article} />
        })}
      </GridContent>
    </Layout>
  )
}

export default CaseStudies

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { cms: { eq: "case" } } }) {
      edges {
        node {
          excerpt(pruneLength: 230)
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
