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
      strapiPhotos(title: { eq: "home photo" }) {
        photo {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head />
      <h1>{data.site.siteMetadata.title}</h1>
      <p>This is a snippet of who I am!</p>
      <Image
        className={indexStyles.photo}
        fluid={data.strapiPhotos.photo.childImageSharp.fluid}
      />
    </Layout>
  )
}
export default WelcomePage
