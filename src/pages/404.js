import React from 'react'
import Content from '../components/Content'
import Container from '../components/Container'

const NotFoundPage = () => (
  <Content heading="404 - Not Found" title="404">
    <section>
      <Container>
        <p>You just hit a route that doesn't exist. Sorry about that.</p>
      </Container>
    </section>
  </Content>
)

export default NotFoundPage
