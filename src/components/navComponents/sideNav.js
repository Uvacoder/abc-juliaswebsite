import React from "react"
import { Link } from "gatsby"

import { FaInstagram, FaLinkedinIn } from "react-icons/fa"

import navbarStyle from "./navbar.module.css"

const SideNav = () => {
  return (
    <nav className={navbarStyle.sidebarMain}>
      <Link to="/" activeClassName={navbarStyle.active}>
        <h1 className={navbarStyle.title}>JW</h1>
      </Link>
      <Link to="/photos" activeClassName={navbarStyle.active}>
        Photos
      </Link>
      <Link to="/about" activeClassName={navbarStyle.active}>
        About
      </Link>
      <Link to="/contact" activeClassName={navbarStyle.active}>
        Contact
      </Link>

      <div className={navbarStyle.icons} id="social-medias">
        <a href="https://www.instagram.com/analog.juju/" target="blank">
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/julia-williams-0a969aa4"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  )
}

export default SideNav
