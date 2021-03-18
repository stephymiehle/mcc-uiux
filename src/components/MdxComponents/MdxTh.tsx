/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxTh: React.FC = ({ ...props }) => {
  return <th className="p-2 font-bold" {...props} />;
};

export { MdxTh };
