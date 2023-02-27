import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Carousel from '../components/UI/carousel/carousel'

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

      <GridContent
        id="partners"
        layout="--center-4"
        mode={partners.mode}
        background={partners.image}
      >
        <h4>{partners.section}</h4>
        {partners.details.map(partner => {
          return (
            <div key={partner.name}>
              <img
                src={partner.logo.publicURL}
                alt={partner.name}
                style={{ width: '100%' }}
              />
              <p className="markdown">{partner.body}</p>
              <a
                href={partner.button.link}
                style={{ display: 'block', textAlign: 'end' }}
              >
                {partner.button.label}
              </a>
            </div>
          )
        })}
      </GridContent>

      <GridContent
        id="team"
        layout="--center-6-offset"
        mode={team.mode}
        background={team.image}
      >
        <h4>{team.section}</h4>
        <section class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport">
            {team.members.map((member, i) => {
              const image = getImage(member.photo)
              return (
                <li
                  className="carousel__slide"
                  id={`carousel__slide${i}`}
                  tabindex="0"
                  key={member.name}
                >
                  <div className="team-sheet carousel__snapper">
                    <div className="team-details">
                      <h1>{member.name}</h1>
                      <h4>{member.title}</h4>
                      <p className="markdown">{member.body}</p>
                    </div>
                    <GatsbyImage
                      image={image}
                      alt={member.name}
                      style={{
                        marginBottom: '-1px',
                      }}
                      imgStyle={{
                        objectPosition: 'bottom',
                        objectFit: 'scale-down',
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <span className="team-controls">
          <button>
            <h4>Prev</h4>
          </button>
          <button>
            <h4>Next</h4>
          </button>
        </span>
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
                    publicURL
                  }
                }
                mode
                section
                image {
                  publicURL
                }
              }
              team {
                members {
                  body
                  name
                  photo {
                    childImageSharp {
                      gatsbyImageData(formats: PNG, placeholder: BLURRED)
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
