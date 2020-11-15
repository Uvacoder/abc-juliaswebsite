require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Julia Williams",
    author: "Dillon Kelley",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/galleries`,
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:
          `https://jw-portfolio-cms.herokuapp.com` || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`photos`, `articles`],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
    },
  ],
}
