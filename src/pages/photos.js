import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Lightbox from "react-image-lightbox"
import Masonry from "react-masonry-css"

import { parseUrlToThumb, parseUrlToFull } from "../utils/parseUrl"
import { shuffleArray } from "../utils/randomizer"
import Head from "../components/head"
import Layout from "../components/layout"

import "../styles/masonry.css"

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  948: 2,
  500: 2,
}

const PhotosPage = () => {
  const [openLightBox, setOpenLightBox] = useState(false)
  const [photoIdx, setPhotoIdx] = useState(0)
  const [currentPhoto, setCurrentPhoto] = useState(null)

  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            id
          }
        }
      }
    }
  `)

  const photos = data.allCloudinaryMedia.edges
  const shuffled = shuffleArray(photos)

  const setLightBox = (e, url) => {
    e.preventDefault()

    setCurrentPhoto(url)
    setOpenLightBox(true)
  }

  return (
    <Layout>
      <Head title="Photos" />
      <h1>Photography</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map(edge => {
          const thumb = parseUrlToThumb(edge.node.secure_url)
          const full = parseUrlToFull(edge.node.secure_url)

          return (
            <div
              key={edge.node.id}
              className="image"
              onClick={e => setLightBox(e, full)}
            >
              <img src={thumb} alt={thumb} />
            </div>
          )
        })}
      </Masonry>

      {openLightBox && (
        <Lightbox
          mainSrc={currentPhoto}
          onCloseRequest={() => setOpenLightBox(false)}
        />
      )}
    </Layout>
  )
}

export default PhotosPage

// {shuffled.map(edge => {
//   const thumb = parseUrlToThumb(edge.node.secure_url)
//   const full = parseUrlToFull(edge.node.secure_url)
//   edge = {
//     ...edge,
//     id: uuidv4(),
//   }
//   console.log(edge)
//   return (
//     <div
//       className="individualPhoto"
//       key={edge.id}
//       onClick={setOpenLightBox(true)}
//     >
//       <h1>hello</h1>
//     </div>
//   )
// })}
