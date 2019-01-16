const soundcloudDescription = require('../../scripts/soundcloudDescription')

console.log(soundcloudDescription)

describe('SoundCloud Description Script', () => {
  it('should exist', () => {
    expect.assertions(1)
    expect(soundcloudDescription).toBeDefined()
  })

  it('should return an error if episode path is not found', () => {
    expect.assertions(1)
    const fakePath = './fake/path'
    expect(() => {
      soundcloudDescription(fakePath)
    }).toThrow(/no such file/)
  })

  it('should return correct output if description, links and sponsor are present', () => {
    expect.assertions(1)
    const normalPath = './__tests__/scripts/testEpisodes/normal.json'
    const result = soundcloudDescription(normalPath)

    expect(result).toEqual(`This is the description

Episode Sponsor:
Test Sponsor Name - https://testsponsor.com
Test Sponsor description

Links in the episode:
Link 1 - https://link1.com
Link 2 - https://link2.com`)
  })

  it('should return correct output if links are missing', () => {
    expect.assertions(1)
    const noLinksPath = './__tests__/scripts/testEpisodes/no-links.json'
    const result = soundcloudDescription(noLinksPath)

    expect(result).toEqual(`This is the description

Episode Sponsor:
Test Sponsor Name - https://testsponsor.com
Test Sponsor description`)
  })

  it('should return correct output if sponsor is missing', () => {
    expect.assertions(1)
    const noSponsorPath = './__tests__/scripts/testEpisodes/no-sponsor.json'
    const result = soundcloudDescription(noSponsorPath)

    expect(result).toEqual(`This is the description

Links in the episode:
Link 1 - https://link1.com
Link 2 - https://link2.com`)
  })
})
