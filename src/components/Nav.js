import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { BREAKPOINTS, COLORS } from '../constants'
import { bs, mq } from '../utils'

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Episodes', to: '/episodes' },
  { text: 'Contact', to: '/contact' },
]

const Nav = () => (
  <nav
    css={css`
      display: inline-block;
      margin-left: ${bs(-0.5)};

      ${mq(BREAKPOINTS.bravo)} {
        margin-left: ${bs(-1)};
      }
    `}
  >
    {links.map(link => (
      <Link
        css={css`
          display: inline-block;
          color: ${COLORS.orange};
          padding: ${bs(0.5)};
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: ${COLORS.red};
          }

          ${mq(BREAKPOINTS.bravo)} {
            padding: ${bs(0.5)} ${bs()};
          }
        `}
        activeStyle={{
          color: COLORS.red,
        }}
        key={link.to}
        style={{ margin: 5 }}
        to={link.to}
      >
        {link.text}
      </Link>
    ))}
  </nav>
)

export default Nav
