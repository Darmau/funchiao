import * as React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <div className="bg-white">
      <Header />
      <main className="mb-12">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
