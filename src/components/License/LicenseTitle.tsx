import React from 'react';
import { Link } from '../Link';

export interface LicenseTitleProps {
  title?: string;
  link?: string;
  mediaType: string;
}

export const LicenseTitle: React.FC<LicenseTitleProps> = ({
  title,
  mediaType,
  link,
}) => {
  const wrapWithQuotes = (str, comp) => (comp ? `"${str}"` : str);
  const titleOrMediaType = title || mediaType;

  if (link) {
    return (
      <Link to={link} className="underline">
        {wrapWithQuotes(titleOrMediaType, !!title)}
      </Link>
    );
  }

  return <>{wrapWithQuotes(titleOrMediaType, !!title)}</>;
};
