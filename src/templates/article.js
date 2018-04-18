import React from 'react';

import { getArticle } from '../utils/query';
import ArticlePage from '../components/article-page';

export default ({ data }) => {
  const article = getArticle(data);
  return <ArticlePage article={article} />;
};

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
