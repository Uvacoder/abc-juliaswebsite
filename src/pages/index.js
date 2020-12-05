import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Head from "../components/head"
import Layout from "../components/layout"

import indexStyles from "./index.module.css"

const WelcomePage = () => {
  const randomPic = Math.floor(Math.random() * 7)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(name: { eq: "0" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head />
      <h1>{data.site.siteMetadata.title}</h1>
      <Image
        className={indexStyles.photo}
        fluid={data.file.childImageSharp.fluid}
      />
    </Layout>
  )
}
export default WelcomePage
