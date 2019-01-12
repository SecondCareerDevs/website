/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const episodeTemplate = path.resolve('src/templates/Episode.js')
const episodeListTemplate = path.resolve('src/templates/EpisodeList.js')

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

      // Create paginated Episodes pages
      const postsPerPage = 8
      const totalPages = Math.ceil(allEpisodes.length / postsPerPage)
      Array.from({ length: totalPages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? '/episodes' : `/episodes/page-${index + 1}`,
          component: episodeListTemplate,
          context: {
            allEpisodesLength: allEpisodes.length,
            totalPages,
            index,
            limit: postsPerPage,
            skip: index * postsPerPage,
          },
        })
      })

      // Create individual Episode pages
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
