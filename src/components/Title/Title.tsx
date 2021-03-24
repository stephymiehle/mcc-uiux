import * as React from 'react';

const Title: React.FC = ({ children }) => {
  return (
    <h1 className="mb-8 text-5xl font-semibold text-black dark:text-white">
      {children}
    </h1>
  );
};

export { Title };
