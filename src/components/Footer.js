import React from 'react'
import { css } from '@emotion/core'
import Container from './Container'
import { COLORS } from '../constants'
import { bs } from '../utils'

const socialLinkItemStyles = css`
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  margin-left: ${bs(0.5)};
  margin-right: ${bs(0.5)};

  &:hover {
    svg {
      fill: ${COLORS.blue};
    }
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    fill: ${COLORS.teal};
    transition: fill 0.3s ease;
  }
`

const Footer = () => (
  <footer
    css={css`
      background-color: ${COLORS.onyx};
      color: ${COLORS.cloud};
      text-align: center;
      padding-top: ${bs(4)};
      padding-bottom: ${bs(4)};
    `}
  >
    <Container>
      <div
        css={css`
          text-align: center;
          margin-bottom: ${bs(2)};
        `}
      >
        <a
          css={socialLinkItemStyles}
          href="http://feeds.soundcloud.com/users/soundcloud:users:332558027/sounds.rss"
          aria-label="soundcloud rss"
        >
          <svg viewBox="0 0 98.918 100" width={25}>
            <ellipse cx="13.566" cy="86.286" rx="13.566" ry="13.714" />
            <path d="M65.569,100H46.35c0-25.879-20.752-46.858-46.35-46.858l0,0V33.715C36.214,33.715,65.569,63.391,65.569,100z" />
            <path d="M79.135,100c0-44.183-35.429-80-79.135-80V0c54.631,0,98.918,44.772,98.918,100H79.135z" />
          </svg>
        </a>

        <a
          css={socialLinkItemStyles}
          href="https://twitter.com/2ndCareerDevs"
          aria-label="twitter link"
        >
          <svg viewBox="0 0 898 708" width={25}>
            <path
              d="M621.4,707.312 C674.28,707.312 722.024,685.68 755.656,650.944 C797.496,659.04 836.936,673.792 872.376,694.224 C858.664,652.592 829.496,617.664 791.56,595.568 C828.68,599.936 864.216,609.472 897.192,623.728 C872.472,587.984 841.352,556.512 805.416,531.36 C805.752,523.728 805.944,516.016 805.944,508.336 C805.944,272.608 620.936,0.72 282.632,0.72 C178.792,0.72 82.072,30.352 0.728,80.944 C15.096,79.264 29.736,78.416 44.568,78.416 C130.728,78.416 210.072,106.912 273.032,154.816 C192.504,156.192 124.536,207.824 101.224,278.656 C112.44,276.56 123.976,275.44 135.848,275.44 C152.568,275.44 168.856,277.6 184.248,281.696 C100.12,298.032 36.712,370.144 36.712,456.624 L36.712,458.912 C61.528,445.536 89.864,437.504 120.056,436.576 C70.68,468.608 38.216,523.136 38.216,585.04 C38.216,617.76 47.304,648.416 63.128,674.672 C153.816,566.8 289.336,495.76 442.216,488.288 C439.064,501.312 437.432,515.072 437.432,528.912 C437.432,627.456 519.784,707.312 621.4,707.312 L621.4,707.312 Z"
              transform="translate(448.960000, 354.016000) scale(-1, 1) rotate(180.000000) translate(-448.960000, -354.016000) "
            />
          </svg>
        </a>
      </div>

      <div>Copyright &copy;{new Date().getFullYear()} Second Career Devs.</div>
    </Container>
  </footer>
)

export default Footer
