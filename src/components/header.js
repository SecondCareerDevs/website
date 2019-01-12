import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Container from './Container'
import Nav from './Nav'
import { BREAKPOINTS, COLORS } from '../constants'
import { bs, mq } from '../utils'

const Header = () => (
  <div
    css={css`
      background-color: ${COLORS.onyx};
      color: ${COLORS.white};
      padding: ${bs()};
    `}
  >
    <Container>
      <h1
        css={css`
          font-size: 1.5em;
          font-weight: normal;
          margin-bottom: 0;

          ${mq(BREAKPOINTS.alpha)} {
            font-size: 2em;
          }
        `}
      >
        <Link
          css={css`
            text-decoration: none;
          `}
          to="/"
        >
          secondCareerDevs
        </Link>
      </h1>
      <Nav />
    </Container>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
