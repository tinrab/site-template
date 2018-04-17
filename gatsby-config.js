const path = require('path');

const remark = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 1280,
          linkImagesToOriginal: false,
          quality: 100,
        },
      },
      {
        resolve: 'gatsby-remark-prismjs',
        options: {
          classPrefix: 'code--',
        },
      },
    ],
  },
};

const plugins = [
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: path.resolve('./data/'),
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-catch-links',
  remark,
  'gatsby-plugin-sitemap',
];

module.exports = {
  siteMetadata: {
    title: 'Site Template',
    description: '',
    baseUrl:
      process.env.NODE_ENV == 'production'
        ? 'https://example.com'
        : 'http://localhost:3000',
  },
  plugins,
};
