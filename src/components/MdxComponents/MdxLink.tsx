/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Link, LinkProps } from '../Link';

const MdxLink: React.FC<LinkProps> = ({ to, ...props }) => (
  <Link
    className="font-semibold underline text-primary-700 hover:text-primary-500 dark:text-primary-200"
    to={to}
    {...props}
  />
);

export { MdxLink };
