const createNodeFields = require('./tools/create-node-fields');
const createPages = require('./tools/create-pages');
const createHome = require('./tools/create-home');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === 'MarkdownRemark') {
    createNodeFields(boundActionCreators, node, getNode);
  }
};

exports.createPages = (params) => {
  return Promise.all([
    createPages(params),
    createHome(params),
  ]);
};
