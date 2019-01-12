import React from 'react'
import Content from '../components/Content'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import LatestEpisode from '../components/LatestEpisode'

const IndexPage = () => (
  <Content title="Home" keywords={['Second Career Devs', 'Career Changers']}>
    <Banner />
    <Intro />
    <LatestEpisode />
  </Content>
)

export default IndexPage
