import React from 'react'
import { Link } from 'gatsby'

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
          {number} - {title}
        </Link>
      </h3>
      <div>{date}</div>
      <div>{description}</div>
      <div dangerouslySetInnerHTML={{ __html: embed }} />

      <h3>Guest</h3>
      <div>
        {name}
        {` - `}
        <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
      </div>
    </div>
  )
}

export default ExcerptedEpisode
