import React from 'react';
import { Link } from '../Link';

interface ICiteProps {
  author: string;
  link: string;
  title?: string;
}

export const Cite: React.FC<ICiteProps> = ({ author, title, link }) => (
  <cite className="text-base not-italic">
    &mdash;&thinsp;
    {title ? (
      <>
        {author},{' '}
        <Link to={link} className="underline">
          "{title}"
        </Link>
      </>
    ) : (
      <Link to={link} className="underline">
        {author}
      </Link>
    )}
  </cite>
);
