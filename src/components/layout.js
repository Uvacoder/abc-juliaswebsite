import React from "react"
import SimpleReactLightbox from "simple-react-lightbox"

import Navbar from "./navbar"
import Footer from "./footer"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import "../styles/styles.css"
import layoutStyle from "./layout.module.css"

const Layout = props => {
  return (
    <Container fluid>
      <SimpleReactLightbox>
        <div className={layoutStyle.body}>
          <Navbar />
          <div className={layoutStyle.content}>
            <main>{props.children}</main>
          </div>
          <Footer />
        </div>
      </SimpleReactLightbox>
    </Container>
  )
}

export default Layout
