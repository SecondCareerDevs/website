import React from 'react'
import { Link } from 'gatsby'
import { BREAKPOINTS } from '../constants'
import { bs, formatEpisodeNumber, mq } from '../utils'

const ExcerptedEpisode = ({ episode }) => {
  const {
    number,
    title,
    date,
    description,
    embed,
    guest: { name, twitter },
    slug,
  } = episode

  return (
    <div
      css={{
        marginBottom: bs(6),

        [mq(BREAKPOINTS.bravo)]: {
          marginBottom: bs(8),
        },
      }}
    >
      <h3>
        <Link to={`/episodes/${slug}`}>
          {formatEpisodeNumber(number)} - {title}
        </Link>
      </h3>
      <div css={{ marginBottom: bs() }}>
        <strong>Published</strong>: {date}
      </div>
      <div css={{ marginBottom: bs(2), maxWidth: '45em' }}>{description}</div>
      <div
        css={{ marginBottom: bs(2) }}
        dangerouslySetInnerHTML={{ __html: embed }}
      />

      <div>
        <strong>Guest</strong>: {name}
        {` - `}
        <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
      </div>
    </div>
  )
}

export default ExcerptedEpisode
