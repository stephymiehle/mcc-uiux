const { createFilePath } = require('gatsby-source-filesystem');

module.exports.onCreateNode = ({
  actions,
  node,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
    // Create handle/ID for linking
    const handle = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });

    createNodeField({
      name: 'handle',
      node,
      value: handle.replace('/', ''),
    });
  }
};
