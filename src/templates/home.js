import React from 'react';

import HomePage from '../components/home-page';

export default ({
  data,
  pathContext: { page, articlesPerPage, totalArticles },
}) => {
  const siteMeta = data.site.siteMetadata;
  const articles = data.allMarkdownRemark.edges.map(({ node: article }) => ({
    ...article.frontmatter,
    ...article.fields,
    coverUrl:
      siteMeta.siteUrl + article.frontmatter.cover.childImageSharp.original.src,
  }));
  return (
    <HomePage
      articles={articles}
      page={page}
      articlesPerPage={articlesPerPage}
      totalArticles={totalArticles}
    />
  );
};

export const query = graphql`
  query HomePageQuery($skip: Int!, $take: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $take
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "article" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            cover {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
          tableOfContents
          html
          fields {
            slug
            date(formatString: "DD MMMM, YYYY")
            author {
              name
              email
              bio
              social {
                twitter
                github
                facebook
                googlePlus
              }
              emailHash
            }
            tags {
              slug
              name
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
