export default {
  getMeta: (data) => ({
    site: data.site.siteMetadata,
  }),
  getArticle: (data) => ({
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
  }),
  getGeneralPage: (data) => ({
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
  }),
  getArticles: (meta, data) =>
    data.allMarkdownRemark.edges.map(({ node: article }) => ({
      ...article.frontmatter,
      ...article.fields,
      coverUrl:
        meta.site.siteUrl + article.frontmatter.cover.childImageSharp.original.src,
    })),
};
