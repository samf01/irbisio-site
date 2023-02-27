import React, { useRef } from 'react'
import './Layout.css'
import { useStaticQuery, graphql } from 'gatsby'
import Pagination from './UI/pagination/paginator'

import Footer from './UI/footer'
import NavBar from './UI/navigation/nav'

const Layout = ({ children }) => {
  const layoutRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "footer" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                image {
                  publicURL
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

      <div className="layout" ref={layoutRef}>
        {children}
        <Footer
          background={
            data.allFile.edges[0].node.childMarkdownRemark.frontmatter.image
          }
        />
      </div>
    </>
  )
}

export default Layout
