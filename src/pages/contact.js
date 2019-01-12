import React from 'react'
import Container from '../components/Container'
import Content from '../components/Content'

const Contact = () => (
  <Content
    heading="Contact"
    title="Contact"
    keywords={['Contact', 'Second Career Devs', 'Career Changers']}
  >
    <section>
      <Container>
        <p>
          If you would like to reach out to Second Career Devs for any reason,
          please send an email to{' '}
          <a href="mailto:secondcareerdevs@gmail.com">
            secondcareerdevs@gmail.com
          </a>
          .
        </p>

        <p>
          If you think you might make a great guest on the show and are more
          comfortable with making pull requests than writing emails, you can
          fork the{' '}
          <a href="https://github.com/SecondCareerDevs/guest-list">
            Second Career Devs Guest List repo
          </a>{' '}
          and add your name to the list. Be sure to leave some information in
          the pull request so I can understand what makes you a good candidate.
          Thanks!
        </p>
      </Container>
    </section>
  </Content>
)

export default Contact
