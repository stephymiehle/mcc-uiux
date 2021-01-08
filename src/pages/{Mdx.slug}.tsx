import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/Layout';

const DocPageTemplate: React.FC<PageProps<GatsbyTypes.DocTemplateQuery>> = ({
  data,
  location,
  children,
}) => {
  // return <>{JSON.stringify(props.data)}</>;
  return (
    <Layout location={location} title={data.mdx.frontmatter.title}>
      <MDXProvider>
        <div className="container mx-auto">
          <h1 className="my-4 text-4xl">{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </MDXProvider>
    </Layout>
  );
};

export default DocPageTemplate;

export const query = graphql`
  query DocTemplate($id: String) {
    mdx(id: { eq: $id }) {
      slug
      body
      frontmatter {
        title
      }
    }
  }
`;
