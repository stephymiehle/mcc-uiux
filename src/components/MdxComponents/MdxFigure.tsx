/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MdxFigure: React.FC = ({ ...props }) => (
  <figure className="my-6 text-base text-grey-500" {...props} />
);

export { MdxFigure };
