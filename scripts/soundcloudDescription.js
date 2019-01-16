const fs = require('fs')
const path = require('path')

function soundcloudDescription(filePath) {
  if (typeof filePath !== 'string') {
    return
  }

  const resolvedPath = path.resolve(filePath)

  let data
  try {
    data = JSON.parse(fs.readFileSync(filePath).toString())
  } catch (err) {
    throw err
  }

  const { description, links, sponsor } = data
  const parts = []

  if (description) {
    parts.push(description)
  }

  if (sponsor) {
    let sponsorString = 'Episode Sponsor:\n'
    sponsorString += `${sponsor.name} - ${sponsor.link}\n${sponsor.description}`
    parts.push(sponsorString)
  }

  if (links) {
    let linkString = 'Links in the episode:\n'
    linkString += links.map(link => `${link.text} - ${link.url}`).join('\n')
    parts.push(linkString)
  }

  const result = parts.join('\n\n')

  if (process.env.NODE_ENV !== 'test') {
    console.log(result)
  }

  return result
}

module.exports = soundcloudDescription

// TODO: This will call it for the npm script
// Not clean, would like a better way
soundcloudDescription(process.argv[2])
