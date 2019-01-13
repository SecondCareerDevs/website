import React from 'react'
import { css, Global } from '@emotion/core'
import { COLORS } from '../constants'
import { bs } from '../utils'

const Tags = () => (
  <Global
    styles={css`
      *,
      *:after,
      *:before {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
      }

      body {
        font-family: 'hackregular', 'Hack', monospace;
        line-height: 1.65;
      }

      a {
        color: ${COLORS.teal};
        transition: color 0.3s ease;

        &:hover {
          color: ${COLORS.blue};
        }
      }

      img {
        display: block;
        width: 100%;
      }

      section {
        padding-top: ${bs(4)};
        padding-bottom: ${bs(4)};
      }
    `}
  />
)

export default Tags
