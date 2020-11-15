import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaEnvelope, FaLinkedinIn } from "react-icons/fa"

import navbarStyle from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={navbarStyle.sidebarMain}>
      <h1>
        <Link to="/">JW</Link>
      </h1>
      <Link to="/photos">Photos</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <div className={navbarStyle.icons} id="social-medias">
        <a href="https://www.instagram.com/freckledjuju/" target="blank">
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

export default Navbar
