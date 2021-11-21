import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet, ViewPropTypes } from 'react-native';

import { DefaultContainerStyle } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...DefaultContainerStyle,
  },
});


export const DefaultLayout = ({ children, style }) => (
  <ScrollView style={[styles.container, style]} showsVerticalScrollIndicator={false}>
    {children}
  </ScrollView>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

DefaultLayout.defaultProps = {
  style: {},
};
