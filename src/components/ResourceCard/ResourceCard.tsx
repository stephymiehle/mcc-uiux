import * as React from 'react';
import { Link } from '../Link';

interface IResourceCardProps {
  link: string;
  title: string;
  key: string;
}

const ResourceCard: React.FC<IResourceCardProps> = ({ key, link, title }) => {
  const url = new URL(link);
  const host = url.hostname;

  function stripWWW(domain) {
    const subdomain = 'www.';
    const subdomainLength = subdomain.length;
    if (domain.substr(subdomain, subdomainLength) === subdomain)
      // eslint-disable-next-line no-param-reassign
      domain = domain.substring(subdomainLength);
    return domain;
  }

  return (
    <Link
      key={key}
      to={link}
      className="block p-3 border border-current rounded text-primary-700 hover:text-primary-500 dark:text-primary-200"
    >
      <div className="mb-2 text-xs opacity-70">{stripWWW(host)}</div>
      <div className="text-sm font-semibold">{title}</div>
    </Link>
  );
};

export { ResourceCard };
