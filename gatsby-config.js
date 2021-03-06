module.exports = {
  // @TODO Use ENV
  siteMetadata: {
    title: 'A + J',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
  ],
};
