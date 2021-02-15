/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import classNames from 'classnames';

interface IMdxFigureProps {
  defaultMargin?: boolean;
  className?: string;
}

const MdxFigure: React.FC<IMdxFigureProps> = ({
  className,
  defaultMargin = true,
  ...props
}) => {
  const figureClasses = classNames(
    'text-base text-grey-500',
    { 'my-6': defaultMargin },
    className,
  );
  return <figure className={figureClasses} {...props} />;
};

export { MdxFigure };
