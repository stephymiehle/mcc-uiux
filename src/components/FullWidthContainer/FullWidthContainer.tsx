import React from 'react';

interface IFullWidthContainerProps {
  author: string;
  link: string;
  title?: string;
}

export const FullWidthContainer: React.FC<IFullWidthContainerProps> = ({
  children,
}) => (
  <div className="relative w-screen transform -translate-x-1/2 left-1/2">
    {children}
  </div>
);
