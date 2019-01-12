import React from 'react'
import Content from '../components/Content'
import Banner from '../components/Banner'
import Intro from '../components/Intro'

const IndexPage = () => (
  <Content title="Home" keywords={['Second Career Devs', 'Career Changers']}>
    <Banner />
    <Intro />
  </Content>
)

export default IndexPage
