import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, AVIF, WEBP]
                  width: 800
                )
              }
            }
            category
          }
        }
      }
    }
  `)

  return (
    <div className="mx-auto px-4 lg:max-w-4xl" id="projects">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        我的作品
      </h2>
      <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-8">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <article className="shadow-sm p-6 border rounded-3xl relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] lg:w-96 lg:shrink-0">
                <GatsbyImage
                  image={post.frontmatter.cover.childImageSharp.gatsbyImageData}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.frontmatter.category}
                  </p>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 lg:text-2xl">
                    <Link to={post.fields.slug}>
                      <span className="absolute inset-0" />
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 lg:leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
