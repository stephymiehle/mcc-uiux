/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/Layout';
import { Blockquote } from '../components/Blockquote';
import { License } from '../components/License';
import { Panel } from '../components/Panel';
import { FullWidthContainer } from '../components/FullWidthContainer';
import {
  MdxH2,
  MdxH3,
  MdxFigcaption,
  MdxFigure,
  MdxLink,
  MdxUl,
  MdxOl,
  MdxLi,
} from '../components/MdxComponents';

const elements = {
  Blockquote,
  a: MdxLink,
  Link: MdxLink,
  FullWidthContainer,
  h2: MdxH2,
  h3: MdxH3,
  figure: MdxFigure,
  figcaption: MdxFigcaption,
  ul: MdxUl,
  ol: MdxOl,
  li: MdxLi,
  License,
  Panel,
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
        reading {
          required {
            title
            link
          }
          optional {
            title
            link
          }
        }
      }
    }
  }
`;
