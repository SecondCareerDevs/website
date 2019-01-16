import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { bs, formatEpisodeNumber } from '../utils'

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
        dangerouslySetInnerHTML={{ __html: embed }}
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
