import React from 'react'
import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'
import Container from './Container'
import GuestCard from './GuestCard'

const query = graphql`
  {
    allEpisodesJson(sort: { fields: [number], order: DESC }) {
      edges {
        node {
          slug
          guest {
            imgUrl
            name
            twitter
          }
        }
      }
    }
  }
`

const PastGuests = () => (
  <StaticQuery
    query={query}
    render={data => {
      const nodes = data.allEpisodesJson.edges.map(edge => edge.node)

      return (
        <Container>
          <div className="past_guests">
            <h3>Past Guests</h3>

            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              {nodes.map(node => (
                <GuestCard
                  key={node.guest.name}
                  guest={{ ...node.guest, slug: node.slug }}
                />
              ))}
            </div>
          </div>
        </Container>
      )
    }}
  />
)

export default PastGuests
