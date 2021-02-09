/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxUl: React.FC = ({ ...props }) => {
  return <ul className="pl-12 list-disc" {...props} />;
};

export { MdxUl };
