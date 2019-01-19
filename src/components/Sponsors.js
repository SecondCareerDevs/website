import React from 'react'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import Container from './Container'
import { bs } from '../utils'

const Sponsors = () => (
  <StaticQuery
    query={graphql`
      {
        allSponsorsJson {
          edges {
            node {
              id
              logoImage {
                src
                alt
              }
              name
              link
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section>
          <Container>
            <h3>Sponsors</h3>
            <div css={{ marginBottom: bs(4) }}>
              {data.allSponsorsJson.edges
                .map(edge => edge.node)
                .map(sponsor => {
                  const { id, link, logoImage, name } = sponsor

                  return (
                    <div
                      key={id}
                      css={{
                        width: 250,
                        textAlign: 'center',
                      }}
                    >
                      <a
                        href={link}
                        css={{
                          display: 'block',
                          marginBottom: bs(),
                          transition: 'opacity .3s ease',
                          '&:hover': { opacity: 0.85 },
                        }}
                      >
                        <img
                          css={{ display: 'block' }}
                          src={withPrefix(logoImage.src)}
                          alt={logoImage.alt}
                        />
                      </a>
                      <a href={link}>{name}</a>
                    </div>
                  )
                })}
            </div>

            <div>
              <p>
                Interested in becoming a sponsor of the show? Send an email to{' '}
                <a href="mailto:secondcareerdevs@gmail.com">
                  secondcareerdevs@gmail.com
                </a>{' '}
                to get the conversation started.
              </p>
            </div>
          </Container>
        </section>
      )
    }}
  />
)

export default Sponsors
