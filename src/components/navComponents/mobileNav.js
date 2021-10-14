import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"

import navbarStyle from "./navbar.module.css"

const MobileNav = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleNavDisplay = () => {
    return isChecked ? setIsChecked(false) : setIsChecked(true)
  }

  const hamburger = (
    <label
      htmlFor="toggle"
      onClick={toggleNavDisplay}
      onKeyPress={toggleNavDisplay}
      className={navbarStyle.hamburger}
      role="button"
      tabIndex={0}
    >
      &#9776;
    </label>
  )

  return (
    <div>
      {hamburger}
      <input type="checkbox" className={navbarStyle.toggle} />
      {isChecked && (
        <Fade exit>
          <nav className={navbarStyle.sidebarMain}>
            <Link
              to="/"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              <h1 className={navbarStyle.title}>JW</h1>
            </Link>
            <Link
              to="/photos"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              Photos
            </Link>
            <Link
              to="/woodwork"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              Woodwork
            </Link>
            <Link
              to="/about"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              About
            </Link>
            <Link
              to="/contact"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
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
        </Fade>
      )}
    </div>
  )
}

export default MobileNav
