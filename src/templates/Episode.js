import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Container from '../components/Container'
import GuestCard from '../components/GuestCard'
import Sponsor from '../components/Sponsor'
import SEO from '../components/seo'

const Episode = ({ data }) => {
  const {
    categories,
    date,
    description,
    embed,
    guest,
    links,
    number,
    sponsor,
    title,
    transcriptFilename,
  } = data.allEpisodesJson.edges[0].node

  return (
    <div>
      <Container>
        <SEO
          title={title}
          keywords={[guest.name, 'Episodes', 'Second Career Devs']}
        />
        <h2>
          {number} - {title}
        </h2>
        <div>{date}</div>
        <div>{description}</div>
        <div dangerouslySetInnerHTML={{ __html: embed }} />

        {transcriptFilename && (
          <div>
            <a href={withPrefix(transcriptFilename)} download>
              Download a Copy of the Transcript
            </a>
          </div>
        )}

        {sponsor && <Sponsor sponsor={sponsor} />}

        <h3>Guest</h3>
        <div>
          <GuestCard key={guest.name} guest={guest} />
        </div>

        {categories ? (
          <div>
            <h3>Categories</h3>
            <ul>
              {categories.map(category => (
                <div key={category}>{category}</div>
              ))}
            </ul>
          </div>
        ) : null}

        {links ? (
          <div>
            <h3>Links</h3>
            <ul>
              {links.map(link => (
                <li key={link.url}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </div>
  )
}

export default Episode

export const query = graphql`
  query EpisodeQuery($slug: String!) {
    allEpisodesJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          description
          number
          embed
          date
          categories
          guest {
            name
            twitter
          }
          links {
            text
            url
          }
          sponsor {
            description
            name
            link
            img {
              src
              alt
            }
          }
          transcriptFilename
        }
      }
    }
  }
`
