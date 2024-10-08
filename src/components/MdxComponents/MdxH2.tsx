/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */
import * as React from 'react';

const MdxH2: React.FC = ({ ...props }) => {
  return (
    <h2
      className="flex mt-16 mb-3 text-4xl font-semibold text-black dark:text-white group"
      {...props}
    />
  );
};

export { MdxH2 };
