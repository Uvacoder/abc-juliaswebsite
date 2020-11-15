import React from "react"
import { Helmet } from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const renderTitle = title ? `${title} | ${data.site.siteMetadata.title}` : `${data.site.siteMetadata.title}`
  return <Helmet title={renderTitle} />
}

export default Head
