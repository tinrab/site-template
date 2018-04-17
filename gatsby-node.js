const createNodeFields = require('./tools/create-node-fields');
const createPages = require('./tools/create-pages');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === 'MarkdownRemark') {
    createNodeFields(boundActionCreators, node, getNode);
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  return createPages(graphql, boundActionCreators);
};
