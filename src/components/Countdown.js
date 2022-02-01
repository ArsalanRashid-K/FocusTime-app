import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 1, isPaused  }) => {


  const interval = useRef(null);
  
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        //do more stuf her
        return time;
      }
      const timeLeft = time - 1000;
      /** this just decreases the number so if the number in 50 it will decrease it by 1 and so on ... if it is 2 it will decrease it by 40-2 ... how long will it take to go from 40 to 38 will depend on setInterval time
       */
      //report the progress
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    /** setInterval(countDown, 2000) make the clock run down by if set at 2000 1 sec will take 2 sec to go down.     */
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60);
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View style={styles.shadow}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSizes.xxxl,
    padding: spacing.md,
    backgroundColor: colors.skyblue,

    borderWidth: 0.5,
    borderRadius: 20,
    overflow: 'hidden',
    /*margin and border radius are to be put in view not in text and . over flow :'hidden' is the most important as it show the border radius in ios apps*/
  },
  shadow: {
    shadowColor: colors.skyblue,
    // shadowColor:'#29062e',
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    /* shadow does not work with overflwo hidden*/
  },
});
