/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require(`webpack`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`

    type MarkdownRemarkFrontmatterPage_1  implements Node {
      image: File @fileByRelativePath
      brand: File @fileByRelativePath
      logo: File @fileByRelativePath
      section: String
    }
    type MarkdownRemarkFrontmatterPage_2  implements Node {
      image: File @fileByRelativePath
      brand: File @fileByRelativePath
      logo: File @fileByRelativePath
      section: String
    }
    type MarkdownRemarkFrontmatterPage_3  implements Node {
      image: File @fileByRelativePath
      brand: File @fileByRelativePath
      logo: File @fileByRelativePath
      section: String
    }
    

    type AllFileChildMarkdownRemarkFrontmatterIntroduction implements Node {

      image: File @fileByRelativePath
    }
  
  `)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              cms
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))

      return Promise.reject(result.errors)
    }

    const allEdges = result.data.allMarkdownRemark.edges

    const blogEdges = allEdges.filter(
      edge => edge.node.frontmatter.cms === 'news'
    )

    const fundEdges = allEdges.filter(
      edge => edge.node.frontmatter.cms === 'fund'
    )

    const caseEdges = allEdges.filter(
      edge => edge.node.frontmatter.cms === 'case'
    )

    blogEdges.forEach((post, index) => {
      const previous =
        index === blogEdges.length - 1 ? null : blogEdges[index + 1].node
      const next = index === 0 ? null : blogEdges[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/news-post.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    fundEdges.forEach((post, index) => {
      const previous =
        index === fundEdges.length - 1 ? null : fundEdges[index + 1].node
      const next = index === 0 ? null : fundEdges[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/fund.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    caseEdges.forEach((post, index) => {
      const previous =
        index === caseEdges.length - 1 ? null : caseEdges[index + 1].node
      const next = index === 0 ? null : caseEdges[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/case-study.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/,
      }),
    ],
  })
}
