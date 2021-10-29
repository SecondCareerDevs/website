import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './Footer'
import FontFaces from '../styles/FontFaces'
import Tags from '../styles/Tags'
import Typography from '../styles/Typography'
import '../styles/normalize.css'
import Container from './Container'
import { bs } from '../utils'
import { COLORS } from '../constants'

const Layout = ({ children }) => (
  <Fragment>
    <FontFaces />
    <Tags />
    <Typography />

    <div
      css={{
        backgroundColor: COLORS.teal,
        color: COLORS.white,
        fontSize: '2rem',
        padding: `${bs(4)} ${bs()}`,
      }}
    >
      <Container>
        Wondering what happened to the podcast?{' '}
        <a
          css={{ color: COLORS.white, '&:hover': { color: COLORS.vapor } }}
          href="https://kyleshevlin.com/the-future-of-second-career-devs"
        >
          Read about it here
        </a>
        {'.'}
      </Container>
    </div>
    <Header />
    <div>{children}</div>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
