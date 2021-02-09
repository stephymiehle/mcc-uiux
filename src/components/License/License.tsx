import React from 'react';
import { LicenseTitle } from './LicenseTitle';
import { LicenseAuthors } from './LicenseAuthors';
import { Author, CCLicense } from './types';
import { Link } from '../Link';
import { CCIcons } from './CCIcons';

export interface ILicenseProps {
  link?: string;
  title?: string;
  authors: Author[];
  mediaType?: string;
  ccVersion?: string;
  ccLicense?: CCLicense;
  type: string;
  className?: string;
}

export const License: React.FC<ILicenseProps> = ({
  type,
  authors, // TODO: author.name = "unknown creator" if author = null
  title,
  mediaType = 'Media',
  link,
  ccVersion = '4.0',
  ccLicense,
  className,
}) => {
  const ccLicenseLink = `https://creativecommons.org/licenses/${ccLicense}/${ccVersion}/`.toLowerCase();
  const unsplashLicenseLink = 'https://unsplash.com/license';
  return (
    <cite className="block mt-4 not-italic">
      <LicenseTitle title={title} mediaType={mediaType} link={link} /> by{' '}
      <LicenseAuthors authors={authors} />
      {type === 'cc' && (
        <>
          {' '}
          is licensed under{' '}
          <Link to={ccLicenseLink} className="underline">
            CC {ccLicense} {ccVersion}
          </Link>
        </>
      )}
      {type === 'unsplash' && (
        <>
          {' '}
          on{' '}
          <Link to={unsplashLicenseLink} className="underline">
            Unsplash
          </Link>
        </>
      )}
      {type === 'cc' && (
        <div role="presentation">
          <CCIcons license={ccLicense} />
          {/* order: by?-nc?-[sa? || nd?]
           https://creativecommons.org/licenses/by-nc-nd/4.0/ */}
        </div>
      )}
    </cite>
  );
};
