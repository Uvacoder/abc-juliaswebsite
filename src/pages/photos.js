import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SRLWrapper } from "simple-react-lightbox"
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
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const photos = data.allCloudinaryMedia.edges
  const shuffled = shuffleArray(photos)

  return (
    <Layout>
      <Head title="Photos" />
      <h1>Photography</h1>
      <SRLWrapper
        options={{
          settings: {
            overlayColor: "rgba(0, 0, 0, 0.9)",
            height: "91vh",
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
        }}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {shuffled.map((edge, i) => {
            const thumb = parseUrlToThumb(edge.node.secure_url)
            const full = parseUrlToFull(edge.node.secure_url)
            return (
              <div className="individualPhoto" key={i}>
                <a href={full} data-attribute="SRL">
                  <img src={thumb} className="image" alt={edge.node.title} />
                </a>
              </div>
            )
          })}
        </Masonry>
      </SRLWrapper>
    </Layout>
  )
}

export default PhotosPage
