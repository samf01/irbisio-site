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
  const { publishedDate, title } = post.frontmatter

  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          url,
          type: 'article',
          article: {
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
          },
        }}
      />
      <ArticleJsonLd
        url={url}
        headline={title}
        datePublished={publishedDate}
        dateModified={publishedDate}
        publisherLogo={`${siteUrl}/logo.png`}
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
