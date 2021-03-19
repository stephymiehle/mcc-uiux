/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */
import * as React from 'react';

const MdxH3: React.FC = ({ ...props }) => {
  return (
    <h3
      className="flex mt-12 mb-3 text-3xl text-black dark:text-white group"
      {...props}
    />
  );
};

export { MdxH3 };
