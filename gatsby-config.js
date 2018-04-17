const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: `${__dirname}/data/`,
    },
  },
  'gatsby-transformer-remark',
];

module.exports = {
  siteMetadata: {
    title: 'Site Template',
    description: '',
    baseUrl: 'http://localhost:3000',
  },
  plugins,
};
