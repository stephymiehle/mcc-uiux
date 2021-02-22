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
  MdxH4,
  MdxFigcaption,
  MdxFigure,
  MdxLink,
  MdxUl,
  MdxOl,
  MdxLi,
} from '../components/MdxComponents';
import { TopicFooter } from '../components/TopicFooter';

const elements = {
  Blockquote,
  a: MdxLink,
  Link: MdxLink,
  FullWidthContainer,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
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
  const { topic } = data.mdx.frontmatter;
  return (
    <Layout location={location} title={data.mdx.frontmatter.title}>
      <MDXProvider components={elements}>
        <div className="container px-4 mx-auto">
          <div className="mx-auto md:text-lg max-w-prose">
            {data.mdx.fields.draft && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                This Page is a draft
              </span>
            )}
            <h1 className="mt-4 mb-8 text-5xl text-black dark:text-white">
              {data.mdx.frontmatter.title}
            </h1>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {topic?.items && (
              <TopicFooter
                items={topic.items}
                label={topic.label}
                location={location}
              />
            )}
          </div>
        </div>
      </MDXProvider>
    </Layout>
  );
};

export default DocPageTemplate;

export const query = graphql`
  query DocTemplate($handle: String) {
    mdx(fields: { handle: { eq: $handle } }) {
      body
      fields {
        draft
      }
      frontmatter {
        title
        topic {
          label
          items {
            slug
            frontmatter {
              title
            }
          }
        }
        resources {
          title
          link
        }
      }
    }
  }
`;
