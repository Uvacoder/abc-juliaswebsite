import React from "react"
import { Helmet } from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)
  const renderTitle = title
    ? `${title} | ${data.site.siteMetadata.title}`
    : `${data.site.siteMetadata.title}`
  return (
    <Helmet title={renderTitle}>
      <meta
        name="description"
        content="Julia Williams is a photographer and writer based out of the Chicago/Detroit. For services or info on commissions and photo shoots, inquire here."
      />
    </Helmet>
  )
}

export default Head
