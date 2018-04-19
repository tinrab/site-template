const path = require('path');

const remark = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      /*
      {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: './',
        },
      },*/
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
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: path.resolve('./data/'),
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['Roboto:300,400,700', 'Source+Code+Pro'],
    },
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-react-svg',
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
    siteUrl:
      process.env.NODE_ENV == 'production'
        ? 'https://example.com'
        : 'http://localhost:3000',
    articlesPerPage: 3,
  },
  plugins,
};
