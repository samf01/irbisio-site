import React, { useEffect, useRef, useState } from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'
import { isInViewport } from '../components/Hooks/ViewFunctions'
import { SideShape } from '../components/graphics/landing-shape'
import { useTrail, animated } from 'react-spring'

const StrategyPage = ({ data }) => {
  const { funds, investors, investing, esg } =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const fund = data.allMarkdownRemark.edges
  const principleRef = useRef(null)
  const esgRef = useRef(null)
  const [esgIn, setEsgIn] = useState(false)

  const trail = useTrail(esg.goals.length, {
    config: { mass: 10, tension: 500, friction: 10, clamp: true },
    translateY: esgIn ? 0 : -220,
  })

  useEffect(() => {
    const principleNodes = principleRef.current.childNodes
    const layout =
      principleRef.current.parentNode.parentNode.parentNode.parentNode

    function inView() {
      principleNodes.forEach((principle, i) => {
        if (isInViewport(principle)) {
          principle.childNodes[0].childNodes[0].classList.add('appear')
          principle.childNodes[1].childNodes[0].classList.add('appear')
        } else {
          principle.childNodes[0].childNodes[0].classList.remove('appear')
          principle.childNodes[1].childNodes[0].classList.remove('appear')
        }
      })

      if (isInViewport(esgRef.current)) setEsgIn(true)
      else setEsgIn(false)
    }

    layout.addEventListener('scroll', () => inView())

    return () => layout.removeEventListener('scroll', () => inView())
  }, [])

  return (
    <Layout>
      <GatsbySeo title="Strategy" />

      <GridContent
        id="investing"
        layout="--center-4"
        mode={investing.mode}
        background={investing.image}
      >
        <div>
          <h4>{investing.section}</h4>
          <h1>{investing.title}</h1>
          <br />
          <p>{investing.body}</p>
        </div>
        <div className="investing-principles" ref={principleRef}>
          {investing.principles.map((principle, i) => {
            return (
              <div
                key={i}
                id={`investing-principle__${i + 1}`}
                className="principle"
                style={{ alignSelf: i % 2 === 1 && 'flex-end' }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <h2 className="hidden">{principle.title}</h2>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <p className="hidden">{principle.body}</p>
                </div>
              </div>
            )
          })}
        </div>
        <p>{investing.footer}</p>
        <SideShape />
      </GridContent>

      <GridContent
        id="funds"
        layout="--center-6 mt-auto"
        mode={funds.mode}
        background={funds.image}
        hide="true"
      >
        <h4>{funds.section}</h4>
        <h6>{funds.heading}</h6>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '150px',
          }}
        >
          {fund.map((node, i) => {
            const { brand, logo, sub_heading, title } =
              node.node.frontmatter.page_1
            const slug = node.node.fields.slug
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3rem',
                }}
              >
                <img
                  src={brand.publicURL}
                  alt={node.node.frontmatter.title}
                  style={{ width: '100%' }}
                />
                <Link to={slug}>
                  <img
                    src={logo.publicURL}
                    className="mock-button"
                    alt={title}
                    style={{ height: '230px', margin: '0 auto' }}
                  />
                </Link>
                <p>{sub_heading}</p>
                <Link
                  to={slug}
                  style={{ alignSelf: 'flex-end', marginTop: 'auto' }}
                >
                  Learn More
                </Link>
              </div>
            )
          })}
        </div>
      </GridContent>
      {/* 
      <GridContent
        id="investors"
        layout="--center-6"
        hide="true"
        mode={investors.mode}
        background={investors.image}
      >
        <h4>{investors.section}</h4>
        <div dangerouslySetInnerHTML={{ __html: investors.body }} />
        <div>
          <p>Our investors include:</p>
          {investors.details.map(investor => {
            return (
              <div key={investor.name} className="investor-list">
                {investor.logo ? (
                  <img src={investor.logo.publicURL} alt={investor.name} />
                ) : (
                  <h1>{investor.name}</h1>
                )}
                <p className="markdown">{investor.body}</p>
                <a
                  href={investor.button.link}
                  style={{ display: 'block', textAlign: 'end' }}
                >
                  {investor.button.label}
                </a>
              </div>
            )
          })}
        </div>
      </GridContent> */}

      <GridContent
        id="esg"
        layout="--center-6 margin-none"
        mode={esg.mode}
        hide="true"
        background={esg.image}
      >
        <h4>{esg.section}</h4>
        <h3>{esg.heading}</h3>
        <div className="esg-goals" ref={esgRef}>
          {trail.map(({ ...style }, index) => {
            return (
              <animated.img
                style={{ ...style }}
                src={esg.goals[index].logo.publicURL}
                alt={esg.goals[index].name}
                key={esg.goals[index].name}
                className="mock-button"
              />
            )
          })}
        </div>
      </GridContent>
    </Layout>
  )
}

export default StrategyPage

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "strategy" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              esg {
                section
                mode
                heading
                image {
                  publicURL
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                goals {
                  name
                  logo {
                    publicURL
                  }
                }
              }
              funds {
                mode
                heading
                section
                image {
                  publicURL
                }
              }
              investing {
                body
                footer
                mode
                section
                title
                image {
                  publicURL
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                principles {
                  body
                  title
                }
              }
              investors {
                mode
                section
                body
                image {
                  publicURL
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                details {
                  body
                  name
                  button {
                    label
                    link
                  }
                  logo {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(
                        width: 1920
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
    allMarkdownRemark(filter: { frontmatter: { cms: { eq: "fund" } } }) {
      edges {
        node {
          frontmatter {
            title
            page_1 {
              brand {
                publicURL
              }
              logo {
                publicURL
              }
              sub_heading
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
