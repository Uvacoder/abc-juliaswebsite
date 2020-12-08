import React from "react"
// import Img from 'gatsby-image'
import { Link } from "gatsby"

import cardStyles from "./galleryStyles.module.css"

const GalleryCard = props => {
  const background = {
    backgroundImage: `url(${props.src})`,
  }
  return (
    <Link to={props.galleryName}>
      <div className={cardStyles.card} style={background}>
        <div className={cardStyles.text}>{props.galleryTitle}</div>
      </div>
    </Link>
  )
}
export default GalleryCard
