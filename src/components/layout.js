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
        data-website-id="12e6b15e-9ced-46d4-8b7f-45adb3c653f0"
        data-do-not-track="true"
        data-cache="true"
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
