export default {
  getMeta: (data) => ({
    site: data.site.siteMetadata,
  }),
  getArticle: (data) => ({
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
  }),
};
