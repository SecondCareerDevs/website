import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './Footer'
import FontFaces from '../styles/Tags'
import Tags from '../styles/Tags'
import Typography from '../styles/Typography'
import '../styles/normalize.css'

const Layout = ({ children }) => (
  <Fragment>
    <FontFaces />
    <Tags />
    <Typography />

    <Header />
    <div>{children}</div>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
