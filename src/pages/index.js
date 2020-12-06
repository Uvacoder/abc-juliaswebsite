import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "splash" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
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
      <h1>{data.site.siteMetadata.title}</h1>

      {photos
        .filter((photo, i) => i === randomIndex)
        .map(photo => {
          return (
            <Image
              className={indexStyles.photo}
              fluid={photo.node.childImageSharp.fluid}
            />
          )
        })}
    </Layout>
  )
}
export default WelcomePage
