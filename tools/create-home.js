const path = require('path');

module.exports = (params) => {
  const {
    graphql,
    boundActionCreators: { createPage },
  } = params;
  const homeTemplate = path.resolve('./src/templates/home.js');

  return new Promise((resolve, reject) => {
    graphql(`
      query CreateHome {
        site {
          siteMetadata {
            articlesPerPage
          }
        }
        allMarkdownRemark(
          filter: { fields: { type: { eq: "article" } } }
          sort: { fields: [fields___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
            }
          }
        }
      }
    `)
      .then((result) => {
        const {
          allMarkdownRemark: articles,
          site: { siteMetadata: { articlesPerPage } },
        } = result.data;

        let page = 1;
        for (let i = 0; i < articles.totalCount; i += articlesPerPage, page++) {
          createPage({
            path: page == 1 ? '/' : `/page/${page}`,
            component: homeTemplate,
            context: {
              page,
              articlesPerPage,
              totalArticles: articles.totalCount,
              // For GraphQL
              skip: i,
              take: articlesPerPage,
            },
          });
        }

        resolve();
      })
      .catch(reject);
  });
};
