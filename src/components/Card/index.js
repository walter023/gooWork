import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Text, TouchableOpacity, Image, View, ViewPropTypes } from 'react-native';

import { Opacity } from 'styles';
import { Routes } from 'config';
import { toUpper, maskMoneyString } from 'helpers';

import { Icon } from '../Icon';
import { styles } from './styles';

export const JobCard = ({ job, style, navigation }) => {
  const { title, employmentType, profession, location, rate, timeFrame } = job;
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
          <View style={styles.inline}>
            <Icon name={profession.name} size="large" containerStyle={styles.icon} />
            <View>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
              <View style={styles.inline}>
                <Text style={styles.boldCopy}>{toUpper(employmentType)}</Text>
                <Text style={styles.boldCopy}> • </Text>
                <Text style={styles.bodyCopy}>{`${toUpper(location.suburb)} ${toUpper(
                  location.state,
                )}`}</Text>
              </View>
              <View style={styles.inline}>
                <Icon name="Clock" size="small" />
                <Text style={styles.smallCopy}>{`Starts ${toUpper(timeFrame).toLowerCase()}`}</Text>
              </View>
              <View style={styles.inline}>
                <Text style={[styles.smallCopy, styles.smallCopyLight]}>a month ago</Text>
                <Text style={[styles.smallCopy, styles.smallCopyLight]}> • </Text>
                <Text style={[styles.smallCopy, styles.smallCopyLight]}>
                  {rate.type !== 'QUOTE' ? maskMoneyString(rate.max) : 'Contact to quote'}
                </Text>
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
