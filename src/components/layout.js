import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import { Script } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Script
        async
        src="https://analytics.darmau.design/script.js"
        data-website-id="ffe85285-a984-4819-9d68-bfb621d150ae"
      />
      <div className="bg-white">
        <Header />
        <main className="mb-12">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
