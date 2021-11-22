import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Text, TouchableOpacity, Image, View, ViewPropTypes } from 'react-native';

import { Opacity } from 'styles';
import { Routes } from 'config';

import { styles } from './styles';

export const JobCard = ({ job, style, navigation }) => {
  const cardScale = new Animated.Value(1);

  const navigateTo = route => {
    navigation.navigate(route, { job });
  };

  const onPressIn = () => {
    Animated.spring(cardScale, {
      toValue: 0.96,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(cardScale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={style}>
      <TouchableOpacity
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => navigateTo(Routes.DETAILS)}
        activeOpacity={Opacity.SEMI}
      >
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ scale: cardScale }],
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Image source={{ uri: 'icon' }} style={styles.image} />
            <View style={styles.headerTitles}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                Blue title
              </Text>
              <View style={styles.inline}>
                <Text style={styles.label}>bold</Text>
                <Text>build point</Text>
                <Text style={styles.small}>regular</Text>
              </View>
              <View style={styles.inline}>
                <Text style={styles.icon}>icon</Text>
                <Text style={styles.small}>small body</Text>
              </View>
              <View style={styles.inline}>
                <Text style={styles.small}>small body</Text>
                <Text>build point</Text>
                <Text style={styles.small}>small body</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
  style: ViewPropTypes.style,
};

JobCard.defaultProps = {
  job: {},
  style: {},
};
