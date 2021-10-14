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
      <meta
        name="keywords"
        content="Chicago, Photography, Woodworking, Curly Hair, Detroit, Jeep, Rock Climbing, Inuitive"
      />
      <meta name="og:title" content={renderTitle} />
      <meta name="og:url" content="https://juliawilliams.info/" />
      <meta
        name="og:description"
        content="Julia Williams is a photographer and writer based out of the Chicago/Detroit. For services or info on commissions and photo shoots, inquire here."
      />
      <meta name="og:image" content="../imgStatic/selfie.webp" />
    </Helmet>
  )
}

export default Head
