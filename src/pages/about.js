import React from "react"
import Head from "../components/head"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import aboutPageStyles from "./about.module.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "selfie" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutPageStyles.container}>
        <h1>About Me</h1>
        <div className={aboutPageStyles.photoContainer}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={aboutPageStyles.photo}
          />
          <p className={aboutPageStyles.credit}>Photo credit: Jordan Nelson</p>
        </div>

        <p>
          Julia is a multidisciplinary maker currently exploring the world of
          film photography. She is originally from Detroit and now lives in
          Chicago. Most often, she can be found mixing chemistry and developing
          film in her home lab. Her subject matter includes travel, backcountry
          landscapes, daily city life, and candid portraiture.
        </p>
        <p>
          When she’s not working, she enjoys: wood working, cooking, bartending,
          biking around the city, long road trips in her Jeep, rock climbing,
          and getting into nature.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
