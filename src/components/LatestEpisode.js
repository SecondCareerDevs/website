import React from 'react'
import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'
import Container from '../components/Container'
import ExcerptedEpisode from '../components/ExcerptedEpisode'
import { COLORS } from '../constants'

const LatestEpisode = () => (
  <StaticQuery
    query={graphql`
      {
        allEpisodesJson(
          filter: { published: { eq: true } }
          limit: 1
          sort: { fields: [number], order: DESC }
        ) {
          edges {
            node {
              number
              title
              date(formatString: "MMMM DD, YYYY")
              description
              trackID
              guest {
                name
                twitter
              }
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <section
        css={css`
          background-color: ${COLORS.vapor};

          a {
            color: ${COLORS.red};

            &:hover {
              color: ${COLORS.orange};
            }
          }
        `}
      >
        <Container>
          <h3>Latest Episode</h3>
          <ExcerptedEpisode episode={data.allEpisodesJson.edges[0].node} />
        </Container>
      </section>
    )}
  />
)

export default LatestEpisode
