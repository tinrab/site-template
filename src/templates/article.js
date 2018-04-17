import React from 'react';

export default ({ data }) => {
  data = {
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
  };
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
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
