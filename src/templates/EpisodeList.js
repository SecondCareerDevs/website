import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Content from '../components/Content'
import ExcerptedEpisode from '../components/ExcerptedEpisode'
import Pagination from '../components/Pagination'
import { BREAKPOINTS } from '../constants'
import { bs, mq } from '../utils'

const EpisodeList = ({ data, ...props }) => {
  const { index, totalPages } = props.pageContext
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

          <Pagination {...{ index, totalPages }} />
        </Container>
      </section>
    </Content>
  )
}

export default EpisodeList

export const query = graphql`
  query EpisodeListQuery($limit: Int!, $skip: Int!) {
    allEpisodesJson(
      filter: { published: { eq: true } }
      limit: $limit
      skip: $skip
      sort: { fields: [number], order: DESC }
    ) {
      edges {
        node {
          number
          title
          date(formatString: "MMMM DD, YYYY")
          description
          guest {
            name
            twitter
          }
          slug
          trackID
        }
      }
    }
  }
`
