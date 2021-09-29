import React from 'react';
import { Cite } from './Cite';

interface IBlockquoteProps {
  author: string;
  link: string;
  title?: string;
}

export const Blockquote: React.FC<IBlockquoteProps> = ({
  author,
  title,
  link,
  children,
}) => (
  <blockquote
    cite={link}
    className="py-3 pl-6 my-5 italic border-l-4 border-primary-200"
  >
    {children}
    {author && <Cite author={author} title={title} link={link} />}
  </blockquote>
);
