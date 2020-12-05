const path = require("path")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allStrapiArticles {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allStrapiArticles.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
// Create blog post list pages
//   const postsPerPage = 2;
//   const numPages = Math.ceil(posts.length / postsPerPage);

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: path.resolve('./src/templates/blog-list.js'),
//       context: {
//         limit: postsPerPage,`
//         skip: i * postsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     });
//   });
// })
// }
module.exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  store,
  cache,
}) => {
  const crypto = require(`crypto`)

  if (node.internal.type === "StrapiArticles") {
    const newNode = {
      id: createNodeId(`StrapiArticleContent-${node.id}`),
      parent: node.id,
      slug: node.slug,
      title: node.title,
      published_at: node.published_at,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiArticleContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }

  if (node.internal.type === "StrapiPhotos") {
    let fileNode = await createRemoteFileNode({
      url: node.photo.url, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode: actions.createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })
    if (fileNode) {
      node.photo___NODE = fileNode.id
    }
  }
}
