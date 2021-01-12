import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/Layout';
import { Blockquote } from '../components/Blockquote';
import { Link } from '../components/Link';

const MdxH2 = (props) => <h2 className="flex mt-12 mb-3 text-3xl" {...props} />;

const shortcodes = {
  Blockquote,
  Link,
  h2: MdxH2,
};

const DocPageTemplate: React.FC<PageProps<GatsbyTypes.DocTemplateQuery>> = ({
  data,
  location,
}) => {
  // return <>{JSON.stringify(props.data)}</>;
  return (
    <Layout location={location} title={data.mdx.frontmatter.title}>
      <MDXProvider components={shortcodes}>
        <div className="container px-4 mx-auto">
          <div className="mx-auto md:text-lg max-w-prose">
            <h1 className="my-4 text-4xl">{data.mdx.frontmatter.title}</h1>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
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
