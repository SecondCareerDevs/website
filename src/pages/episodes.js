import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Content from '../components/Content'
import ExcerptedEpisode from '../components/ExcerptedEpisode'
import { BREAKPOINTS } from '../constants'
import { bs, mq } from '../utils'

const Episodes = ({ data }) => {
  const episodes = data.allEpisodesJson.edges.map(edge => edge.node)

  return (
    <Content
      heading="Episodes"
      title="Episodes"
      keywords={['Episodes', 'Second Career Devs', 'Career Changers']}
    >
      <section>
        <Container>
          {episodes.map(episode => (
            <div
              key={episode.slug}
              css={{
                marginBottom: bs(6),

                [mq(BREAKPOINTS.bravo)]: {
                  marginBottom: bs(8),
                },
              }}
            >
              <ExcerptedEpisode episode={episode} />
            </div>
          ))}
        </Container>
      </section>
    </Content>
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
          date(formatString: "MMMM DD, YYYY")
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
