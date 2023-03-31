import * as React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
