import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DefaultContainerStyle } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...DefaultContainerStyle,
  },
});

export const ListLayout = ({ children }) => (
  <React.Fragment>
    <View style={styles.container}>{children}</View>
  </React.Fragment>
);

ListLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
