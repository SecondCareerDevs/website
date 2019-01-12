import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Container from './Container'
import Header from './header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div>
      <Container>{children}</Container>
    </div>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
