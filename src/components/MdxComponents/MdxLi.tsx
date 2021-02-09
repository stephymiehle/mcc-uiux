/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxLi: React.FC = ({ ...props }) => {
  return <li className="my-2" {...props} />;
};

export { MdxLi };
