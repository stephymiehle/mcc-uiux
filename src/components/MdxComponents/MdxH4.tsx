/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */
import * as React from 'react';

const MdxH4: React.FC = ({ ...props }) => {
  return (
    <h4
      className="flex mt-6 mb-3 text-2xl text-black dark:text-white group"
      {...props}
    />
  );
};

export { MdxH4 };
