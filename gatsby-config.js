module.exports = {
  siteMetadata: {
    title: 'Second Career Devs',
    description:
      'Second Career Devs is a podcast focused on telling the stories of people who changed careers to become web developers and software engineers.',
    author: 'Kyle Shevlin',
    siteUrl: 'https://secondcareerdevs.com',
  },
  mapping: {
    'EpisodesJson.sponsor': 'SponsorsJson',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-110577663-1',
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'episodes',
        path: `${__dirname}/src/episodes`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sponsors',
        path: `${__dirname}/src/sponsors`,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Second Career Devs`,
        short_name: `sCD`,
        start_url: `/`,
        background_color: `#1b2b34`,
        theme_color: `#1b2b34`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  pathPrefix: '/',
}
