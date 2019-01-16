/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    `Second Career Devs has been updated. Reload to display the latest version?`
  )

  if (answer) {
    window.location.reload()
  }
}
