/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const episodeTemplate = path.resolve('src/templates/Episode.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const query = graphql(`
    {
      allEpisodesJson(sort: { fields: [number], order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return query
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      const allEpisodes = result.data.allEpisodesJson.edges

      allEpisodes.forEach(episode => {
        const { slug } = episode.node

        createPage({
          path: `episodes/${slug}`,
          component: episodeTemplate,
          context: {
            slug,
          },
        })
      })
    })
    .catch(err => {
      console.log(err)
    })
}
