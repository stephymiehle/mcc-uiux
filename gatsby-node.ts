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

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  actions,
  node,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
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

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type TopicsYaml implements Node {
      items: [Mdx] @link(by: "fields.handle")
    }`,
    `type Mdx implements Node {
      frontmatter: Frontmatter
    }`,
    `type Frontmatter {
      topic: TopicsYaml @link
    }`,
  ];
  createTypes(typeDefs);
};

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
