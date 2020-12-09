import React, { useState, useEffect } from "react"
import { window } from "browser-monads"

import SideNav from "./navComponents/sideNav"
import MobileNav from "./navComponents/mobileNav"

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

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

  return <>{isMobile ? <MobileNav /> : <SideNav />} </>
}

export default Navbar
