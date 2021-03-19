import * as React from 'react';
import { Link } from '../Link';

interface IButtonProps {
  to?: string;
}

const Button: React.FC<IButtonProps> = ({ to = '#', children }) => {
  return (
    <Link
      to={to}
      className="inline-block px-3 py-2 text-white rounded bg-primary-600 hover:bg-primary-800"
    >
      {children}
    </Link>
  );
};

export { Button };
