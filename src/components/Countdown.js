import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 100, isPaused }) => {
  const [millis, setmillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60);
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.xxxl,
    padding: spacing.lg,
    backgroundColor: '#e33030',
  },
});
