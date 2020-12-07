import React from "react"
// import SimpleReactLightbox from "simple-react-lightbox"

import Navbar from "./navbar"
import Footer from "./footer"

import "../styles/styles.css"
import layoutStyle from "./layout.module.css"

const Layout = props => {
  return (
    // <SimpleReactLightbox>
    <div className={layoutStyle.body}>
      <Navbar />
      <div className={layoutStyle.content}>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
    // </SimpleReactLightbox>
  )
}

export default Layout
