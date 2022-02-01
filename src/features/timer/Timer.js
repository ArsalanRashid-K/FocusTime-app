import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';

export const Timer = ({ focusSubject }) => {
  /** focusSubject={focusSubject}   export const Timer = ({ focusSubject })
   * f={focusSubject}   export const Timer = ({ f }) this is also correct , and also input {f} everywhere  ex-> <Text style={styles.task}>{f}</Text>    */

  const [isStared, setIsStareted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStared} />
      </View>

      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Timer goes here</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {isStared ? (
          <RoundedButton title="Pause" onPress={() => setIsStareted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStareted(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});