import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Projects() {
  const {
    allMarkdownRemark: { nodes: posts },
  } = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              publicURL
            }
            category
          }
        }
      }
    }
  `)

  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] lg:w-96 lg:shrink-0">
                <img
                  src={post.frontmatter.cover.publicURL}
                  alt=""
                  className="bsolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          )
        })}
      </div>
    </div>
  )
}
