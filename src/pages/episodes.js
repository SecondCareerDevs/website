import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import ExcerptedEpisode from '../components/ExcerptedEpisode'
import SEO from '../components/seo'

const Episodes = ({ data }) => {
  const episodes = data.allEpisodesJson.edges.map(edge => edge.node)

  return (
    <Fragment>
      <SEO
        title="Episodes"
        keywords={['Second Career Devs', 'Career Changers']}
      />
      <Container>
        <h2>Episodes</h2>
        <div>
          {episodes.map(episode => (
            <ExcerptedEpisode key={episode.slug} episode={episode} />
          ))}
        </div>
      </Container>
    </Fragment>
  )
}

export default Episodes

export const query = graphql`
  query AllEpisodesQuery {
    allEpisodesJson(sort: { fields: [number], order: DESC }) {
      edges {
        node {
          number
          title
          date
          description
          embed
          guest {
            name
            twitter
          }
          slug
        }
      }
    }
  }
`
