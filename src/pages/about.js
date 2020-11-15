import React from "react"
import Head from "../components/head"

import Layout from "../components/layout"

import aboutPageStyles from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutPageStyles.container}>
        <h1>About Me</h1>
        <img src="https://placedog.net/700/260" alt="no photo" />
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
        <p>
          Feugiat nisl pretium fusce id velit ut. Ullamcorper dignissim cras
          tincidunt lobortis. Massa tincidunt nunc pulvinar sapien et ligula
          ullamcorper. Semper quis lectus nulla at volutpat diam. Morbi tempus
          iaculis urna id. Sit amet commodo nulla facilisi nullam vehicula ipsum
          a arcu. Ipsum dolor sit amet consectetur adipiscing elit duis
          tristique. Vitae purus faucibus ornare suspendisse sed nisi lacus sed
          viverra. Fermentum iaculis eu non diam. Volutpat consequat mauris nunc
          congue nisi vitae. Gravida cum sociis natoque penatibus et magnis dis
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
