import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';

interface IHomepageProps {
  location: Location;
  data: GatsbyTypes.HomepageQueryQuery;
}

const HomePage: React.FC<IHomepageProps> = ({ location, data }) => (
  <Layout location={location}>
    <section className="text-center text-grey-700 body-font">
      <div className="container px-4 py-6 mx-auto sm:py-12 md:py-24">
        <h1 className="mb-4 text-3xl font-medium leading-tight text-grey-900 title-font sm:text-4xl">
          This will be a pretty page!
        </h1>
        <p className="mb-4 leading-relaxed">
          ...it's just a work in progress right now :)
        </p>
        <p className="mb-8 leading-relaxed">
          Use the navigation at the bottom of the page to browse by category.
        </p>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        buildContext
        version
      }
    }
    siteBuildMetadata {
      buildTime
    }
    headerImage: file(
      relativePath: { eq: "placeholder-images/unsplash-gradienta.jpeg" }
    ) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default HomePage;
