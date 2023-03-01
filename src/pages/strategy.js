import React, { useEffect, useRef } from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'
import { isInViewport } from '../components/Hooks/ViewFunctions'
import { SideShape } from '../components/graphics/landing-shape'

const StrategyPage = ({ data }) => {
  const { funds, investors, investing, esg } =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  const principleRef = useRef(null)

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
        layout="--center-6"
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
          {funds.fund_type.map((fund, i) => {
            return (
              <div
                key={fund.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3rem',
                }}
              >
                <img
                  src={fund.title.publicURL}
                  alt={fund.name}
                  style={{ width: '100%' }}
                />
                <Link to={fund.button.link}>
                  <img
                    src={fund.logo.publicURL}
                    className="mock-button"
                    alt={fund.name}
                    style={{ height: '230px', margin: '0 auto' }}
                  />
                </Link>
                <p>{fund.body}</p>
                <Link
                  to={fund.button.link}
                  style={{ alignSelf: 'flex-end', marginTop: 'auto' }}
                >
                  {fund.button.label}
                </Link>
              </div>
            )
          })}
        </div>
      </GridContent>

      <GridContent
        id="investors"
        layout="--center-4"
        mode={investors.mode}
        background={investors.image}
      >
        <h4>{investors.section}</h4>
        {investors.details.map(investor => {
          return (
            <div key={investor.name}>
              <img
                src={investor.logo.publicURL}
                alt={investor.name}
                style={{ width: '100%' }}
              />
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
      </GridContent>

      <GridContent
        id="esg"
        layout="--center-6"
        mode={esg.mode}
        hide="true"
        background={esg.image}
      >
        <h4>{esg.section}</h4>
        <h3>{esg.heading}</h3>
        <div
          style={{
            paddingTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '3rem',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          {esg.goals.map(goal => {
            return (
              <img
                src={goal.logo.publicURL}
                alt={goal.name}
                key={goal.name}
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
                fund_type {
                  body
                  button {
                    label
                    link
                  }
                  name
                  title {
                    publicURL
                  }
                  logo {
                    publicURL
                  }
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
