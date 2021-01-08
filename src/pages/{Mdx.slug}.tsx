import React from 'react';
import { graphql } from 'gatsby';

const DocPageTemplate: React.FC<PageProps> = (props) => {
  return <>{JSON.stringify(props.data)}</>;
};

export default DocPageTemplate;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      slug
    }
  }
`;
