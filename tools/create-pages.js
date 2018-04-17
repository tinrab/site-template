const path = require('path');

module.exports = (params) => {
  const {
    graphql,
    boundActionCreators: { createPage },
  } = params;
  const articleTemplate = path.resolve(`./src/templates/article.js`);
  const pageTemplate = path.resolve(`./src/templates/page.js`);

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                type
                slug
              }
            }
          }
        }
      }
    `)
      .then((result) => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component:
              node.fields.type === 'article' ? articleTemplate : pageTemplate,
            context: { slug: node.fields.slug },
          });
        });
        resolve();
      })
      .catch(reject);
  });
};
