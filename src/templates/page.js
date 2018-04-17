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
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        description
      }
      fields {
        slug
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
