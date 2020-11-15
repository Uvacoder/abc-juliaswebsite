import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Imgage from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"
import Masonry from "react-masonry-css"

import Head from "../components/head"
import Layout from "../components/layout"

import "../styles/masonry.css"

const PhotosPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPhotos {
        edges {
          node {
            title
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
  console.log(data.allStrapiPhotos)
  return (
    <Layout>
      <Head title="Photos" />
      <h1>Photography</h1>

      <SRLWrapper>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allStrapiPhotos.edges.map((edge, i) => {
            return (
              <Link to={edge.node.photo.url}>
                <Imgage
                  fluid={edge.node.photo.childImageSharp.fluid}
                  className="image"
                  alt={edge.node.title}
                />
              </Link>
            )
          })}
        </Masonry>
      </SRLWrapper>
    </Layout>
  )
}

export default PhotosPage
