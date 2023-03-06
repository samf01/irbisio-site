import React from 'react'
import GridContent from '../components/UI/grid-content'
import PreviewArticle from '../components/UI/news/article-preview'
import FoundationButton from '../components/UI/snow-leopard-button'
import Landing from '../components/UI/above-the-fold'
import {
  FinanceIcon,
  ProjectIcon,
  TechIcon,
} from '../components/graphics/icons'

const Home = ({ data, articles }) => {
  const { introduction, about, leopard, news, strategy } = data

  return (
    <Layout>
      <GatsbySeo title="Home Page" />
      <Landing />
      <GridContent
        id="introduction"
        layout="--center-4"
        mode={introduction.mode}
        background={introduction.image}
      >
        <h4>{introduction.section}</h4>
        <h1>{introduction.title}</h1>
        <p className="markdown">{introduction.body}</p>
      </GridContent>
      <GridContent
        id="strategy"
        layout="--center-4"
        mode={strategy.page_1.mode}
        background={strategy.image}
      >
        <h4>{strategy.section}</h4>
        <h1>{strategy.page_1.title}</h1>
        <p className="markdown">{strategy.page_1.body}</p>
      </GridContent>
      <GridContent
        id="strategy-2"
        layout="--center-4"
        mode={strategy.page_2.mode}
        background={strategy.image}
      >
        <h4>{strategy.section}</h4>
        <p className="markdown">{strategy.page_2.heading}</p>
        {strategy.page_2.bullets.map((bullet, i) => {
          return (
            <span className="row" key={i}>
              {bullet.icon === 'tech' && <TechIcon />}
              {bullet.icon === 'finance' && <FinanceIcon />}
              {bullet.icon === 'project' && <ProjectIcon />}

              <p>{bullet.body}</p>
            </span>
          )
        })}
        <p className="markdown">{strategy.page_2.body}</p>
        <Link to={strategy.button.link}>{strategy.button.label}</Link>
      </GridContent>
      <GridContent
        id="news"
        layout="--center-4"
        mode={news.mode}
        background={news.image}
      >
        <h4>{news.section}</h4>
        {articles.map((node, i) => {
          const article = {
            title: node.node.frontmatter.title,
            date: node.node.frontmatter.date,
            excerpt: node.node.excerpt,
            slug: node.node.fields.slug,
          }
          return (
            <div key={i}>
              <PreviewArticle article={article} />
            </div>
          )
        })}
        <p>
          For more information contact:{' '}
          <a href={news.contact.link}>{news.contact.label}</a>
        </p>
      </GridContent>
      <GridContent
        id="about"
        layout="--center-4"
        mode={about.mode}
        background={about.image}
      >
        <h4>{about.section}</h4>
        <h1>{about.title}</h1>
        <p className="markdown">{about.body}</p>
        <Link to={about.button.link}>{about.button.label}</Link>
      </GridContent>
      <GridContent
        id="snow-leopard"
        layout="--center-4"
        mode={leopard.mode}
        background={leopard.image}
      >
        <h4>{leopard.section}</h4>
        <h1>{leopard.title}</h1>
        <p className="markdown">{leopard.body}</p>
        <FoundationButton button={leopard.button} />
      </GridContent>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "home" } }) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              about {
                body
                button {
                  label
                  link
                }
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                mode
                section
                title
              }
              introduction {
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
                mode
                section
                title
              }
              leopard {
                body
                button {
                  label
                  link
                }
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
                mode
                section
                title
              }
              news {
                contact {
                  label
                  link
                }
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
                mode
                section
              }
              strategy {
                button {
                  label
                  link
                }
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
                section
                page_1 {
                  body
                  mode
                  title
                }
                page_2 {
                  body
                  bullets {
                    body
                    icon
                  }
                  mode
                  statement
                }
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { cms: { eq: "news" } } }) {
      edges {
        node {
          excerpt(pruneLength: 230)
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
