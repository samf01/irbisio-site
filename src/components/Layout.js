import React, { useRef } from 'react'
import './Layout.css'
import { useStaticQuery, graphql } from 'gatsby'
import Pagination from './UI/pagination/paginator'
import loadable from '@loadable/component'

import NavBar from './UI/navigation/nav'

const Footer = loadable(() => import('./UI/footer'))

const Layout = ({ children }) => {
  const layoutRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "footer" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                footer {
                  mode
                  image {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(
                        width: 800
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <NavBar layoutRef={layoutRef} />

      <Pagination layoutRef={layoutRef} />

      <div className="layout" id="layout" ref={layoutRef}>
        {children}
        <Footer
          footer={
            data.allFile.edges[0].node.childMarkdownRemark.frontmatter.footer
          }
        />
      </div>
    </>
  )
}

export default Layout
