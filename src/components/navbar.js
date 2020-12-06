import React, { useState, useEffect } from "react"
import { window } from "browser-monads"
import { Link } from "gatsby"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"

import navbarStyle from "./navbar.module.css"

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isChecked, setIsChecked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Logic to add :
  //if you click a link in the mobile nav it toggles out of the nav menu

  const toggleNavDisplay = () => {
    return isChecked ? setIsChecked(false) : setIsChecked(true)
  }
  useEffect(() => {
    if (width < 700) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  const displayMobileNav = isChecked
    ? {
        display: "block",
      }
    : {
        display: "none",
      }

  return (
    <>
      <label
        htmlFor="toggle"
        onClick={toggleNavDisplay}
        className={navbarStyle.hamburger}
      >
        &#9776;
      </label>
      <input type="checkbox" className={navbarStyle.toggle} />
      <nav
        className={navbarStyle.sidebarMain}
        style={isMobile ? displayMobileNav : null}
      >
        <h1>
          <Link to="/">JW</Link>
        </h1>
        <Link to="/photos">Photos</Link>
        {/*<Link to="/blog">Blog</Link> never again*/}
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
    </>
  )
}

export default Navbar
