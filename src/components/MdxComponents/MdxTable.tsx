/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxTable: React.FC = ({ ...props }) => {
  return <table className="w-full" {...props} />;
};

export { MdxTable };
