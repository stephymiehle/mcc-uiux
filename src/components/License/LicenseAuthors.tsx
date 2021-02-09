import * as React from 'react';
import { Link } from '../Link';
import { Author } from './types';

export interface LicenseAuthorsProps {
  authors: Author[];
}

export type LicenseAuthorProps = Author;

const delimiter = (arr, serial = 'and', d = ',') => {
  const { length } = arr;
  const lastIndex = length - 1;
  const serialIndex = length - 2;
  const dSpace = `${d} `;
  const serialSpace = serial === null ? ' ' : `${serial} `;
  return arr.reduce((accumulator, current, index) => {
    accumulator.push(current);
    if (index < lastIndex) {
      accumulator.push(
        // eslint-disable-next-line no-nested-ternary
        index === serialIndex && serial !== null
          ? length === 2
            ? ` ${serialSpace}`
            : dSpace + serialSpace
          : dSpace,
      );
    }
    return accumulator;
  }, []);
};

const LicenseAuthor: React.FC<LicenseAuthorProps> = ({ name, link }) => {
  if (link) {
    return (
      <Link to={link} className="underline">
        {name}
      </Link>
    );
  }

  return <>{[name]}</>;
};

const LicenseAuthors: React.FC<LicenseAuthorsProps> = ({ authors }) => {
  return (
    <>
      {delimiter(
        authors.map((author) => (
          <LicenseAuthor key={author.name} {...author} />
        )),
      )}
    </>
  );
};

export { LicenseAuthors };
