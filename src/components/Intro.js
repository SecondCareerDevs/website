import React from 'react'
import Container from './Container'

const Intro = () => (
  <section css={{ fontSize: '1.25em' }}>
    <Container>
      <p>
        Each episode of the Second Career Devs podcast focuses on a guest who
        became a software engineer after a previous career.
      </p>

      <p>
        My goal is to find interesting stories and lessons that couldn't have
        been learned in any other way.
      </p>

      <p css={{ marginBottom: 0 }}>Thanks for listening. - Kyle</p>
    </Container>
  </section>
)

export default Intro
