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

export const ccLicenseLink = (ccLicense: CCLicense, ccVersion: string) =>
  `https://creativecommons.org/licenses/${ccLicense}/${ccVersion}/`.toLowerCase();

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
  const unsplashLicenseLink = 'https://unsplash.com/license';
  return (
    <cite className="block mt-4 not-italic">
      <LicenseTitle title={title} mediaType={mediaType} link={link} />
      {type === 'copyright' ? <> &copy; </> : ' by '}
      <LicenseAuthors authors={authors} />
      {type === 'cc' && (
        <>
          {' '}
          licensed under{' '}
          <Link to={ccLicenseLink(ccLicense, ccVersion)} className="underline">
            CC{ccLicense === 'ZERO' ? '0' : ` ${ccLicense}`} {ccVersion}
          </Link>
        </>
      )}
      {type === 'mit' && (
        <>
          {' '}
          licensed under the{' '}
          <Link to="/mit" className="underline">
            MIT License
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
      {type === 'public' && <>; public domain</>}
      {type === 'cc' && (
        <div role="presentation" className="mt-2">
          <CCIcons license={ccLicense} />
          {/* order: by?-nc?-[sa? || nd?]
           https://creativecommons.org/licenses/by-nc-nd/4.0/ */}
        </div>
      )}
    </cite>
  );
};
