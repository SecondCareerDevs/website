import React from 'react'
import Content from '../components/Content'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import LatestEpisode from '../components/LatestEpisode'
import Sponsors from '../components/Sponsors'

const IndexPage = () => (
  <Content title="Home" keywords={['Second Career Devs', 'Career Changers']}>
    <Banner />
    <Intro />
    <LatestEpisode />
    <Sponsors />
  </Content>
)

export default IndexPage
