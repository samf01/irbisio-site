import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'

const BlogPost = ({
  data: {
    post,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  const url = `${siteUrl}${post.fields.slug}`
  const { description, featuredimage, publishedDate, title } = post.frontmatter

  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: 'article',
          article: {
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
          },
          images: [
            {
              url: `${siteUrl}${getSrc(featuredimage)}`,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={url}
        headline={title}
        images={[`${siteUrl}${getSrc(featuredimage)}`]}
        datePublished={publishedDate}
        dateModified={publishedDate}
        publisherLogo={`${siteUrl}/logo.png`}
        description={description}
        overrides={{
          '@type': 'BlogPosting',
        }}
      />

      <div className="grid-content--center-4">
        <div>
          <h1>{title}</h1>
          <p>Published {publishedDate}</p>
        </div>
        <GatsbyImage
          image={getImage(featuredimage)}
          style={{ width: '100%' }}
          alt={title}
          title={title}
        />

        <div className="mt-4">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Link to="/blog">Back to Articles</Link>
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date
        title
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              height: 350
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
        }
        description
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`
