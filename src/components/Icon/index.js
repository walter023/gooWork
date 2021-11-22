import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import { styles } from './styles';
import { SvgIcon } from './Icons';

export const Icon = ({ containerStyle, name, size }) => (
  <View style={[styles.container, styles[size], containerStyle]}>
    <SvgIcon name={name} size={size} />
  </View>
);

Icon.propTypes = {
  containerStyle: ViewPropTypes.style,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

Icon.defaultStyles = {
  containerStyle: {},
};
