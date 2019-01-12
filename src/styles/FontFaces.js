import React from 'react'
import { css, Global } from '@emotion/core'
import hackWoff2 from '../fonts/hack-regular-webfont.woff2'
import hackWoff from '../fonts/hack-regular-webfont.woff'

const FontFaces = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'hackregular';
        src: url('${hackWoff2}') format('woff2'),
             url('${hackWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
)

export default FontFaces
