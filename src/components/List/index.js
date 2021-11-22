import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, StyleSheet, View, ViewPropTypes } from 'react-native';
import uuid from 'react-native-uuid';

import { JobCard } from '../Card';

const styles = StyleSheet.create({
  card: {},
});

export const JobList = ({ data, navigation, style }) => (
  <View style={style}>
    <FlatList
      data={data}
      key={uuid.v4()}
      renderItem={({ item }) => <JobCard job={item} navigation={navigation} style={styles.card} />}
    />
  </View>
);

JobList.propTypes = {
  data: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};

JobList.defaultProps = {
  style: {},
};
