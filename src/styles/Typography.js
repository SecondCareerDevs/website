import React from 'react'
import { css, Global } from '@emotion/core'
import { bs } from '../utils'

const Typography = () => (
  <Global
    styles={css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
      }

      p {
        max-width: 45em;
        margin-top: 0;
        margin-bottom: ${bs(2)};
      }
    `}
  />
)

export default Typography
