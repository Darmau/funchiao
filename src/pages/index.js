import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Projects from "../components/projects"

const BlogIndex = ({ location }) => {


  return (
    <Layout>
      <Bio />
      <Projects />
    </Layout>
  )
}

export default BlogIndex
