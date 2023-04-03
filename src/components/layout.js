import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import { Script } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
    <Script
        async
        defer
        data-website-id="cb78f122-72fa-44d5-bf34-2533b4641a42"
        src="https://analytics.darmau.design/umami.js"
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