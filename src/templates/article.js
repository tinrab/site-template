import React from 'react';

export default ({ data }) => {
  data = {
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
  };
  return (
    <div>
      <h1>{data.title}</h1>
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
      }
      tableOfContents
      html
      fields {
        slug
        authorData {
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
        baseUrl
      }
    }
  }
`;
