import React, { Fragment } from 'react'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import SEO from '../components/seo'

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" keywords={['Second Career Devs', 'Career Changers']} />
    <Banner />
    <Intro />
  </Fragment>
)

export default IndexPage
