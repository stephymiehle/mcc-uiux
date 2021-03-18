/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxTd: React.FC = ({ ...props }) => {
  return <td className="p-2" {...props} />;
};

export { MdxTd };
