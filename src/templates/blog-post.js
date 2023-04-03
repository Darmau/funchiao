import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPostTemplate = ({
  data: { markdownRemark: post },
}) => {

  return (
    <Layout>
      <article className="mt-20 w-full">
        <header className="mx-auto max-w-5xl py-16 px-4 lg:px-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.frontmatter.title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">{post.frontmatter.description}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="w-full"
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export function Head() {
  return (
    <>
      <title>Funchiao</title>
      <meta name="description" content="Funchiao's personal website" />
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
