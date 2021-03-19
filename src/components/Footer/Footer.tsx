import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { useSiteMetadata, useSocialQuery } from '../../hooks';
import { Link } from '../Link';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  const data = useStaticQuery<GatsbyTypes.FooterDataQuery>(graphql`
    query FooterData {
      siteBuildMetadata {
        buildYear: buildTime(formatString: "Y")
      }
      allTopicsYaml {
        nodes {
          id
          label
          items {
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const { title, description } = useSiteMetadata();
  const { twitter, facebook, instagram } = useSocialQuery();

  const {
    siteBuildMetadata: { buildYear },
    allTopicsYaml,
  } = data;
  return (
    <footer
      className="text-grey-700 dark:text-grey-400 dark:bg-grey-700 bg-grey-200"
      id="topics"
    >
      <div className="container flex flex-col flex-wrap px-4 py-12 mx-auto md:items-center">
        <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
          All Topics by Category
        </h2>
        <div className="grid grid-flow-col gap-12">
          {allTopicsYaml.nodes.map((node) => (
            <div key={node.id}>
              <h3 className="pt-2 mb-3 font-bold tracking-wide border-t text-grey-900 dark:text-white border-primary-500">
                {node.label}
              </h3>
              <nav className="list-none">
                {node.items.map((item) => (
                  <li key={item.slug} className="mb-2 last:mb-0">
                    <Link
                      className="text-grey-600 hover:text-grey-800 dark:text-grey-400 dark:hover:text-grey-200"
                      to={`/${item.slug}`}
                    >
                      {item.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-grey-300 dark:bg-grey-600">
        <div className="container flex flex-wrap justify-center px-2 pt-4 mx-auto">
          <p className="px-2 text-sm text-center">
            © {buildYear} {title}
          </p>
          <p className="px-2 text-sm text-center">
            Content developed by Stephy Miehle
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
