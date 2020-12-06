import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"
import Masonry from "react-masonry-css"
// import InfiniteScroll from "react-infinite-scroll-component"

// import { shuffleArray } from "../utils/randomizer"
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
    showCloseButton: true,
  },
  thumbnails: {
    showThumbnails: false,
  },
  caption: {
    showCaption: false,
  },
}
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  948: 2,
  500: 2,
}

const PhotosPage = () => {
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
            }
          }
        }
      }
    }
  `)

  const photos = data.allStrapiPhotos.edges
  // const shuffled = shuffleArray(photos)

  return (
    <Layout>
      <Head title="Photos" />
      <h1>Photography</h1>
      <SRLWrapper options={options}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((edge, i) => {
            return (
              <div className="individualPhoto" key={i}>
                <Image
                  fluid={edge.node.photo.childImageSharp.fluid}
                  className="image"
                  alt={edge.node.title}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )
          })}
        </Masonry>
      </SRLWrapper>
    </Layout>
  )
}

export default PhotosPage
