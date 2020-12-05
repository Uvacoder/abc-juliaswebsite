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
          <p>Photo credit: Jordan Nelson</p>
        </div>
        <p>
          Julia is a self-taught film photographer from Detroit, currently
          living in Chicago. She has been experimenting with the medium since
          childhood after being gifted a Canon Sureshot 115u from her father.
          Currently, she develops and processes out of her home lab. Her subject
          matter includes international travel, backcountry landscapes, daily
          city life, and candid portraiture.
        </p>
        <p>
          When she’s not working, she enjoys: wood working, cooking, bartending,
          biking aimlessly around the city, long road trips in her
          self-converted Jeep, rock climbing, and getting into nature.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
