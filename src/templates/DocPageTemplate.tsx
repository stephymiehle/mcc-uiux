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
import { Button } from '../components/Button';
import { Link } from '../components/Link';
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
  MdxTable,
  MdxTh,
  MdxTd,
} from '../components/MdxComponents';
import { TopicFooter } from '../components/TopicFooter';
import { ResourceCard } from '../components/ResourceCard';

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
  table: MdxTable,
  th: MdxTh,
  td: MdxTd,
  License,
  Panel,
  Button,
};

const DocPageTemplate: React.FC<PageProps<GatsbyTypes.DocTemplateQuery>> = ({
  data,
  location,
}) => {
  const { topic } = data.mdx.frontmatter;
  const { resources } = data.mdx.frontmatter;
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
            <h1 className="mt-4 mb-8 text-5xl font-semibold text-black dark:text-white">
              {data.mdx.frontmatter.title}
            </h1>
            {resources && (
              <div className="mb-12">
                <MdxH2>Resources</MdxH2>
                <div className="grid gap-4 resource-container md:grid-cols-2">
                  {resources.map((resource) => (
                    <ResourceCard
                      key={resource.link}
                      link={resource.link}
                      title={resource.title}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="mb-12 mdx-content">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
            {topic?.items && (
              <FullWidthContainer className="py-12 mt-12 bg-grey-100 dark:bg-grey-800">
                <div className="container px-4 mx-auto">
                  <div className="mx-auto md:text-lg max-w-prose">
                    <TopicFooter
                      items={topic.items}
                      label={topic.label}
                      location={location}
                    />
                  </div>
                </div>
              </FullWidthContainer>
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
