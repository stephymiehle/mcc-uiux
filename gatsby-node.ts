import { GatsbyConfig, GatsbyNode } from 'gatsby';
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

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;
  const result = await graphql<any>(
    `
      query($draft: Boolean) {
        allMdx(filter: { fields: { draft: { in: [false, $draft] } } }) {
          nodes {
            fields {
              handle
            }
          }
        }
      }
    `,
    // when the env is also dev, include drafts
    { draft: process.env.NODE_ENV === 'development' },
  );

  result.data.allMdx.nodes.forEach(({ fields }) => {
    createPage({
      path: fields.handle,
      component: path.resolve(`./src/templates/DocPageTemplate.tsx`),
      context: {
        handle: fields.handle,
      },
    });
  });
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
