// import React from "react"
// import Layout from "../components/layout"
// import blogStyle from "../pages/blog.module.css"

// import { graphql, Link } from "gatsby"

// export const query = graphql`
//   query($slug: String!) {
//     strapiArticles(slug: { eq: $slug }) {
//       published_at(formatString: "MMMM Do, YYYY")
//       title
//       childStrapiArticleContent {
//         childMarkdownRemark {
//           html
//           timeToRead
//         }
//       }
//     }
//   }
// `

// const BlogTemplate = ({ data }) => {
//   return (
//     <Layout>
//       <Link to="/blog" className={blogStyle.backBtn}>
//         back
//       </Link>
//       <h1>{data.strapiArticles.title}</h1>
//       <p>{data.strapiArticles.published_at}</p>
//       <div
//         className={blogStyle.articleText}
//         dangerouslySetInnerHTML={{
//           __html:
//             data.strapiArticles.childStrapiArticleContent.childMarkdownRemark
//               .html,
//         }}
//       ></div>
//     </Layout>
//   )
// }

// export default BlogTemplate
