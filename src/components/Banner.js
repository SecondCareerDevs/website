import React from 'react'
import { css } from '@emotion/core'
import Container from './Container'
import { COLORS } from '../constants'
import { bs } from '../utils'

const Banner = () => (
  <div
    css={css`
      background-color: ${COLORS.red};
      color: ${COLORS.white};
      text-align: center;
      padding-top: ${bs(4)};
      padding-bottom: ${bs(4)};
    `}
  >
    <Container>
      <div
        css={css`
          font-size: 1.5em;
          font-style: italic;
        `}
      >
        Roads less traveled and the lessons learned along the way.
      </div>
    </Container>
  </div>
)

export default Banner
