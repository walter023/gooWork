import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, StyleSheet, View, ViewPropTypes } from 'react-native';

import { JobCard } from '../Card';

const styles = StyleSheet.create({
  card: {},
});

const keyExtractor = ({ id }) => id;

export const JobList = ({ data, navigation, style }) => (
  <View style={style}>
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <JobCard tender={item} navigation={navigation} style={styles.card} />
      )}
    />
  </View>
);

JobList.propTypes = {
  data: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};
