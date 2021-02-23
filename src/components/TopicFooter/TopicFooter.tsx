import * as React from 'react';
import { Link } from '../Link';

interface TopicFooterProps {
  label: string;
  items: readonly {
    slug: string;
    frontmatter: {
      title: string;
    };
  }[];
  location: Location;
}

const TopicFooter: React.FC<TopicFooterProps> = ({
  label,
  items,
  location,
}) => {
  // Filter out the current item
  const filteredItems = items.filter(
    (item) => !location.pathname.match(item.slug),
  );

  if (filteredItems.length <= 0) {
    return null;
  }

  return (
    <>
      <h4 className="mb-3 font-medium text-grey-900 dark:text-white">
        Other Pages in {label}
      </h4>
      <nav className="list-none">
        {filteredItems.map((item) => (
          <li key={item.slug}>
            <Link
              className="text-grey-600 hover:text-grey-800 dark:text-grey-400 dark:hover:text-grey-200"
              to={`/${item.slug}`}
            >
              {item.frontmatter.title}
            </Link>
          </li>
        ))}
      </nav>
    </>
  );
};

export { TopicFooter };
