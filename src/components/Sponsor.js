import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

const Sponsor = ({ sponsor }) => (
  <div>
    <h3>
      This episode is sponsored by <a href={sponsor.link}>{sponsor.name}</a>
    </h3>
    <div>
      {sponsor.img && (
        <a href={sponsor.link}>
          <img src={withPrefix(sponsor.img.src)} alt={sponsor.img.alt} />
        </a>
      )}
      {sponsor.description && (
        <div>
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
