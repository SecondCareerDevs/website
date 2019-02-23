import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { bs, createEpisodeEmbed, formatEpisodeNumber } from '../utils'

const ExcerptedEpisode = ({ episode }) => {
  const {
    number,
    title,
    date,
    description,
    guest: { name, twitter },
    slug,
    trackID,
  } = episode

  return (
    <div>
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
        dangerouslySetInnerHTML={{ __html: createEpisodeEmbed(trackID) }}
      />

      <div>
        <strong>Guest</strong>: {name}
        {twitter ? (
          <Fragment>
            {` - `}
            <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
          </Fragment>
        ) : null}
      </div>
    </div>
  )
}

export default ExcerptedEpisode
