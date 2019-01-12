import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import { BREAKPOINTS } from '../constants'
import { bs, mq } from '../utils'

const imgWrapStyles = {
  display: 'block',
  marginBottom: bs(),
  transition: 'opacity 0.3s ease',

  '&:hover': {
    opacity: 0.9,
  },

  [mq(BREAKPOINTS.alpha)]: {
    width: '48%',
    flexShrink: 0,
    marginBottom: 0,
    marginRight: '4%',
  },

  [mq(BREAKPOINTS.bravo)]: {
    width: '32%',
  },
}

const descriptionStyles = {
  [mq(BREAKPOINTS.alpha)]: {
    width: '48%',
    flexShrink: 0,
  },

  [mq(BREAKPOINTS.bravo)]: {
    width: '66%',
  },

  [mq(BREAKPOINTS.charlie)]: {
    fontSize: '1.1em',
  },
}

const Sponsor = ({ sponsor }) => (
  <div css={{ marginBottom: bs(2) }}>
    <h3>
      This episode is sponsored by <a href={sponsor.link}>{sponsor.name}</a>
    </h3>
    <div css={{ [mq(BREAKPOINTS.alpha)]: { display: 'flex' } }}>
      {sponsor.img && (
        <a css={imgWrapStyles} href={sponsor.link}>
          <img src={withPrefix(sponsor.img.src)} alt={sponsor.img.alt} />
        </a>
      )}
      {sponsor.description && (
        <div css={descriptionStyles}>
          {sponsor.description}
          <p>
            Learn more at <a href={sponsor.link}>{sponsor.link}</a>
          </p>
        </div>
      )}
    </div>
  </div>
)

Sponsor.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    description: PropTypes.string,
  }).isRequired,
}

export default Sponsor
