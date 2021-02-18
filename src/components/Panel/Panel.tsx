import React from 'react';
import classNames from 'classnames';

interface IPanelProps {
  caption?: string;
  defaultPadding?: boolean;
  defaultBackground?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
}

export const Panel: React.FC<IPanelProps> = ({
  caption,
  className,
  defaultPadding = true,
  fullWidth = true,
  fullHeight = true,
  defaultBackground = true,
  children,
}) => {
  const panelClasses = classNames(
    'rounded overflow-hidden',
    { 'p-4': defaultPadding },
    { 'w-full': fullWidth },
    { 'h-full': fullHeight },
    { 'bg-grey-50 dark:bg-grey-800': defaultBackground },
    className,
  );
  return (
    <div className={panelClasses}>
      {children}
      {caption && <div className="mt-3 text-sm text-center">{caption}</div>}
    </div>
  );
};
