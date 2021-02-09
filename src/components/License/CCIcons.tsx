import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { CCLicense } from './types';

interface CCIconsProps {
  license: CCLicense;
}

const iconName = (layer: string): any =>
  `creative-commons-${layer}`.toLowerCase();

const CCIcons: React.FC<CCIconsProps> = ({ license }) => {
  const layers = license.split('-');
  return (
    <>
      {layers.map((layer) => (
        <FontAwesomeIcon key={layer} icon={['fab', iconName(layer)]} />
      ))}
    </>
  );
};

export { CCIcons };
