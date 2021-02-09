/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxOl: React.FC = ({ ...props }) => {
  return <ol className="pl-12 list-decimal" {...props} />;
};

export { MdxOl };
