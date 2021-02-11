import { IconName } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { CCLicense } from './types';

interface CCIconsProps {
  license: CCLicense;
}

const ICONS: Record<string, IconName> = {
  ZERO: 'creative-commons-zero',
  BY: 'creative-commons-by',
  SA: 'creative-commons-sa',
  NC: 'creative-commons-nc',
};

const iconName = (layer: string) => ICONS[layer];

const CCIcons: React.FC<CCIconsProps> = ({ license }) => {
  const layers = license.split('-');
  return (
    <>
      <FontAwesomeIcon
        icon={['fab', 'creative-commons']}
        className="mr-1 text-2xl"
      />
      {layers.map((layer) => (
        <FontAwesomeIcon
          key={layer}
          icon={['fab', iconName(layer)]}
          className="mr-1 text-2xl"
        />
      ))}
    </>
  );
};

export { CCIcons };
