import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Container from '../components/Container'
import Content from '../components/Content'
import GuestCard from '../components/GuestCard'
import Sponsor from '../components/Sponsor'
import { bs, formatEpisodeNumber } from '../utils'

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
    <Content
      heading={`${formatEpisodeNumber(number)} - ${title}`}
      title={title}
      keywords={[guest.name, 'Episodes', 'Second Career Devs']}
    >
      <section>
        <Container>
          <div css={{ marginBottom: bs() }}>
            <strong>Published</strong>: {date}
          </div>
          <div css={{ marginBottom: bs(2), maxWidth: '45em' }}>
            {description}
          </div>
          <div
            css={{ marginBottom: bs(2) }}
            dangerouslySetInnerHTML={{ __html: embed }}
          />

          {transcriptFilename && (
            <div css={{ marginBottom: bs(2) }}>
              <a href={withPrefix(transcriptFilename)} download>
                Download a Copy of the Transcript
              </a>
            </div>
          )}

          {sponsor && <Sponsor sponsor={sponsor} />}

          <h3>Guest</h3>
          <div css={{ marginBottom: bs(2) }}>
            <GuestCard key={guest.name} guest={guest} />
          </div>

          {categories ? (
            <div css={{ marginBottom: bs(2) }}>
              <h3 css={{ marginBottom: 0 }}>Categories</h3>
              <ul>
                {categories.map(category => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {links ? (
            <div css={{ marginBottom: bs(2) }}>
              <h3 css={{ marginBottom: 0 }}>Links</h3>
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
      </section>
    </Content>
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
