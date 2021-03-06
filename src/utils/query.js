import _ from './helpers';

export const getMeta = (data) => {
  return {
    site: data.site.siteMetadata,
  };
};

const getRelated = (data) =>
  // Shuffle articles
  _.shuffle(
    data.related.edges.map(({ node }) => ({
      ...node.frontmatter,
      ...node.fields,
    })),
  )
    // Remove current
    .filter((node) => node.slug != data.markdownRemark.fields.slug)
    // Take 3
    .slice(0, 3);

export const getArticle = (data) => {
  const meta = getMeta(data);
  const article = {
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
    permalink: `${meta.site.siteUrl}/${data.markdownRemark.fields.slug}`,
  };

  if (data.markdownRemark.frontmatter.cover) {
    article.coverUrl =
      meta.site.siteUrl +
      data.markdownRemark.frontmatter.cover.childImageSharp.original.src;
  }

  if (data.related) {
    article.related = getRelated(data);
  }

  return article;
};

export const getGeneralPage = (data) => {
  const meta = getMeta(data);
  return {
    ...data.markdownRemark,
    ...data.markdownRemark.frontmatter,
    ...data.markdownRemark.fields,
    permalink: `${meta.site.siteUrl}/${data.markdownRemark.fields.slug}`,
  };
};

export const getArticles = (data) => {
  return data.allMarkdownRemark.edges.map(({ node }) => {
    return getArticle({ site: data.site, markdownRemark: node });
  });
};
