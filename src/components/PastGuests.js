import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Container from './Container'
import GuestCard from './GuestCard'

const query = graphql`
  {
    allEpisodesJson(sort: { fields: [number], order: DESC }) {
      edges {
        node {
          guest {
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
      const guests = data.allEpisodesJson.edges.map(edge => edge.node.guest)

      return (
        <Container>
          <div className="past_guests">
            <h3>Past Guests</h3>

            <div className="guest_cards">
              {guests.map(guest => (
                <GuestCard key={guest.name} guest={guest} />
              ))}
            </div>
          </div>
        </Container>
      )
    }}
  />
)

export default PastGuests
