import React from 'react';
import classNames from 'classnames';

interface IFullWidthContainerProps {
  className?: string;
}

export const FullWidthContainer: React.FC<IFullWidthContainerProps> = ({
  className,
  children,
}) => {
  const classes = classNames(
    'relative w-screen transform -translate-x-1/2 left-1/2',
    className,
  );
  return <div className={classes}>{children}</div>;
};
