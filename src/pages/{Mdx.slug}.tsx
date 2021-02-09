/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/Layout';
import { Blockquote } from '../components/Blockquote';
import { Link } from '../components/Link';
import { License } from '../components/License';
import { FullWidthContainer } from '../components/FullWidthContainer';

const MdxH2 = (props) => (
  <h2
    className="flex mt-12 mb-3 text-3xl text-black dark:text-white"
    {...props}
  />
);

const MdxFigcaption = (props) => (
  <figcaption className="text-grey-500" {...props} />
);

const MdxLink = (props) => (
  <Link
    className="font-semibold underline text-primary-700 hover:text-primary-500 dark:text-primary-200"
    {...props}
  />
);

const elements = {
  Blockquote,
  a: MdxLink,
  Link: MdxLink,
  FullWidthContainer,
  h2: MdxH2,
  figcaption: MdxFigcaption,
  License,
};

const DocPageTemplate: React.FC<PageProps<GatsbyTypes.DocTemplateQuery>> = ({
  data,
  location,
}) => {
  // return <>{JSON.stringify(props.data)}</>;
  return (
    <Layout location={location} title={data.mdx.frontmatter.title}>
      <MDXProvider components={elements}>
        <div className="container px-4 mx-auto">
          <div className="mx-auto md:text-lg max-w-prose">
            <h1 className="mt-4 mb-8 text-5xl text-black dark:text-white">
              {data.mdx.frontmatter.title}
            </h1>
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
