import React from "react"
import Fade from "react-reveal/Fade"

import Navbar from "./navbar"
import Footer from "./footer"
import SimpleReactLightbox from "simple-react-lightbox"

import "../styles/styles.css"
import layoutStyle from "./layout.module.css"
import "react-image-lightbox/style.css"

const Layout = props => {
  return (
    // <SimpleReactLightbox>
    <div className={layoutStyle.body}>
      <Navbar />
      <div className={layoutStyle.content}>
        <SimpleReactLightbox>
          <Fade duration={1000}>
            <main>{props.children}</main>
          </Fade>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </div>
    // </SimpleReactLightbox>
  )
}

export default Layout
