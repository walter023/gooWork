import PropTypes from 'prop-types';
import React from 'react';
import { IconSize } from 'styles';

import Tiles from 'src/assets/tiler.svg';
import Bricklayer from 'src/assets/bricklayer.svg';
import CabinetMaker from 'src/assets/cabinet-maker.svg';

export const SvgIcon = ({ name, size }) => {
  switch (name) {
    case 'Tiler':
      return <Tiles width={IconSize[size]} height={IconSize[size]} />;
    case 'Bricklayer':
      return <Bricklayer width={IconSize[size]} height={IconSize[size]} />;
    case 'Cabinet Maker':
      return <CabinetMaker width={IconSize[size]} height={IconSize[size]} />;
    default:
      break;
  }
  return null;
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
