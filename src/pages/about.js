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
          <p>Photo credit: Jordan</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis
          posuere morbi leo urna molestie at elementum eu. Mauris pharetra et
          ultrices neque ornare aenean euismod. Quis auctor elit sed vulputate
          mi sit. Dolor sed viverra ipsum nunc aliquet bibendum. Bibendum est
          ultricies integer quis auctor elit sed vulputate mi. In ante metus
          dictum at tempor. Amet nulla facilisi morbi tempus iaculis urna id.
          Tortor pretium viverra suspendisse potenti. Congue mauris rhoncus
          aenean vel. Nisl purus in mollis nunc sed id semper. Congue quisque
          egestas diam in arcu cursus euismod. Pretium fusce id velit ut tortor
          pretium viverra suspendisse.{" "}
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
