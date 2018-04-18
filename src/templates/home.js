import React from 'react';

import HomePage from '../components/home-page';
import { getMeta, getArticles } from '../utils/query';

export default ({
  data,
  pathContext: { page, articlesPerPage, totalArticles },
}) => {
  const articles = getArticles(getMeta(data), data);
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
              emailHash
              bio
              social {
                twitter
                github
                facebook
                googlePlus
              }
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
