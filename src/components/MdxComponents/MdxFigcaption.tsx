/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxFigcaption: React.FC = ({ ...props }) => {
  return <figcaption className="mt-4" {...props} />;
};

export { MdxFigcaption };
