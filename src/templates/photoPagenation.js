import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"
import Masonry from "react-masonry-css"
import { window } from "browser-monads"

import { shuffleArray } from "../utils/randomizer"
import Head from "../components/head"
import Layout from "../components/layout"

import "../styles/masonry.css"

const options = {
  settings: {
    overlayColor: "rgba(0, 0, 0, 0.9)",
    height: "90vh",
  },
  buttons: {
    showDownloadButton: false,
    showThumbnailsButton: false,
    showAutoplayButton: false,
    size: "10px",
  },
  thumbnails: {
    showThumbnails: false,
  },
}

const PhotosPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

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

  const data = useStaticQuery(graphql`
    query {
      allStrapiPhotos {
        edges {
          node {
            title
            id
            photo {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              url
            }
          }
        }
      }
    }
  `)
  const photos = data.allStrapiPhotos.edges
  const shuffled = shuffleArray(photos)
  return (
    <Layout>
      <Head title="Photos" />
      <h1>Photography</h1>
      <SRLWrapper options={options}>
        <Masonry
          breakpointCols={isMobile ? 2 : 3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {shuffled.map((edge, i) => {
            return (
              <a href={edge.node.photo.url} key={i}>
                <Image
                  fluid={edge.node.photo.childImageSharp.fluid}
                  className="image"
                  alt={edge.node.title}
                />
              </a>
            )
          })}
        </Masonry>
      </SRLWrapper>
    </Layout>
  )
}

export default PhotosPage