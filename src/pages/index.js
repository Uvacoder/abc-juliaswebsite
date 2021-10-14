import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { v4 as uuid } from "uuid"

import Head from "../components/head"
import Layout from "../components/layout"

import indexStyles from "./index.module.css"

const WelcomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)/" }
          relativeDirectory: { eq: "splash" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const photos = data.allFile.edges
  const randomIndex = Math.floor(Math.random() * photos.length)

  return (
    <Layout>
      <Head />
      <h1 className={indexStyles.title}>{data.site.siteMetadata.title}</h1>

      {photos
        .filter((photo, i) => i === randomIndex)
        .map(photo => {
          return (
            <div className={indexStyles.container} key={uuid()}>
              <Image
                className={indexStyles.photo}
                fluid={photo.node.childImageSharp.fluid}
              />
            </div>
          )
        })}
    </Layout>
  )
}
export default WelcomePage
