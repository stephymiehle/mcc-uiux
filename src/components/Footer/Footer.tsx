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
      className="text-white dark:text-grey-400 dark:bg-grey-700 bg-primary-600"
      id="topics"
    >
      <div className="container flex flex-col flex-wrap px-4 py-12 mx-auto md:items-center">
        <h2 className="mb-6 text-2xl font-bold text-white">
          All Topics by Category
        </h2>
        <div className="grid grid-flow-col gap-12">
          {allTopicsYaml.nodes.map((node) => (
            <nav key={node.id}>
              <h3 className="pt-2 mb-3 font-bold tracking-wide uppercase border-t text-primary-25 border-primary-25">
                {node.label}
              </h3>
              <ul className="list-none">
                {node.items.map((item) => (
                  <li key={item.slug} className="mb-2 last:mb-0">
                    <Link
                      className="text-white hover:text-primary-100 hover:underline"
                      to={`/${item.slug}`}
                    >
                      {item.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="bg-primary-800">
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
