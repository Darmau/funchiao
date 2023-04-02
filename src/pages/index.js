import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Projects from "../components/projects"

const BlogIndex = () => {
  return (
    <Layout>
      <Bio />
      <Projects />
    </Layout>
  )
}

export default BlogIndex

export function Head() {
  return (
    <>
      <title>Funchiao</title>
      <meta name="description" content="Funchiao's personal website" />
    </>
  )
}
