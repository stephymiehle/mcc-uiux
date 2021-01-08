import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import * as path from 'path';

const getDataOrPanic = async (query, graphql, reporter) => {
  const { data, errors } = await graphql(query);
  if (errors) {
    reporter.panicOnBuild(`🚨  ERROR: ${errors}`);
  }
  return data;
};

const getChild = (node: any) => {
  return node.childMarkdownRemark || node.childMdx;
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = ({
//   actions,
//   node,
//   getNode,
// }) => {
//   const { createNodeField, createNode } = actions;
//   if (
//     node.internal.type === 'Mdx' &&
//     node.fileAbsolutePath &&
//     node.internal.fieldOwners.slug !== 'gatsby-plugin-i18n'
//   ) {
//     const value = createFilePath({ node, getNode });
//     console.log({ value, node });
//     createNodeField({
//       name: 'slug',
//       node,
//       value,
//     });
//   }
// };

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  stage,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve('src'), 'node_modules'],
    },
  });

  // No sourcemaps in production
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
