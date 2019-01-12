import React, { Fragment } from 'react'
import SEO from '../components/seo'

const Contact = () => (
  <Fragment>
    <SEO title="Contact" keywords={['Second Career Devs', 'Career Changers']} />
    <h1>Contact</h1>
    <p>
      If you would like to reach out to Second Career Devs for any reason,
      please send an email to{' '}
      <a href="mailto:secondcareerdevs@gmail.com">secondcareerdevs@gmail.com</a>
      .
    </p>

    <p>
      If you think you might make a great guest on the show and are more
      comfortable with making pull requests than writing emails, you can fork
      the{' '}
      <a href="https://github.com/kyleshevlin/second-career-devs-guest-list">
        Second Career Devs Guest List repo
      </a>{' '}
      and add your name to the list. Be sure to leave some information in the
      pull request so I can understand what makes you a good candidate. Thanks!
    </p>
  </Fragment>
)

export default Contact
