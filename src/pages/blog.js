import React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArticleContent {
        edges {
          node {
            title
            slug
            published_at(fromNow: true)
            childMarkdownRemark {
              excerpt
              timeToRead
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      {data.allStrapiArticleContent.edges.map(edge => {
        return (
          <div className={blogStyles.box}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <div className={blogStyles.descriptions}>
                <p className={blogStyles.date}>{edge.node.published_at} </p>
                <p className={blogStyles.date}>|</p>
                <p className={blogStyles.date}>
                  {edge.node.childMarkdownRemark.timeToRead} minute read
                </p>
              </div>
              <p className={blogStyles.excerpt}>
                {" "}
                {edge.node.childMarkdownRemark.excerpt}
              </p>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogPage
