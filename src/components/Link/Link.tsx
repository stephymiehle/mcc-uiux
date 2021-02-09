import React from 'react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

interface IOutboundLinkProps {
  href: string;
}

export type LinkProps = Omit<GatsbyLinkProps<HTMLAnchorElement>, 'ref'>;

const OutboundLink: React.FC<IOutboundLinkProps> = ({
  href,
  children,
  ...rest
}) => (
  <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
    {children}
  </a>
);

const Link: React.FC<LinkProps> = ({ children, to, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <OutboundLink href={to} {...rest}>
      {children}
    </OutboundLink>
  );
};

export { Link, OutboundLink };
