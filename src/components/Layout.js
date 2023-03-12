import React, { useRef } from 'react'
import './Layout.css'
import { useStaticQuery, graphql } from 'gatsby'
import Pagination from './UI/pagination/paginator'
import loadable from '@loadable/component'
import GridContent from './UI/grid-content'
import Form from './UI/contact/form'
import MockForm from './graphics/contact-form-mockup'
import NavBar from './UI/navigation/nav'
import { useAdmin } from './Hooks/useAdmin'

const Footer = loadable(() => import('./UI/footer'))

const Layout = ({ children }) => {
  const layoutRef = useRef(null)
  const admin = useAdmin()

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

  const { footer } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <>
      <NavBar layoutRef={layoutRef} />
      <Pagination layoutRef={layoutRef} />
      <div className="layout" id="layout" ref={layoutRef}>
        {children}
        <GridContent
          id="contact"
          layout="--center-4"
          mode={footer.mode}
          background={footer.image}
        >
          <h4>Contact</h4>
          {admin ? <MockForm /> : <Form />}
        </GridContent>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export default Layout
