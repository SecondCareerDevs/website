import React from 'react'
import { css } from '@emotion/core'
import { BREAKPOINTS } from '../constants'
import { mq } from '../utils'

const Container = ({ children }) => (
  <div
    css={css`
      width: 85%;
      margin-left: auto;
      margin-right: auto;

      ${mq(BREAKPOINTS.bravo)} {
        width: 75%;
      }

      ${mq(BREAKPOINTS.charlie)} {
        width: 65%;
      }
    `}
  >
    {children}
  </div>
)

export default Container
