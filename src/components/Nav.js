import React from 'react'
import { Link } from 'gatsby'

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Episodes', to: '/episodes' },
  { text: 'Contact', to: '/contact' },
]

const Nav = () => (
  <nav>
    {links.map(link => (
      <Link key={link.to} style={{ margin: 5 }} to={link.to}>
        {link.text}
      </Link>
    ))}
  </nav>
)

export default Nav
