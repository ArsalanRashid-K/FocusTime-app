import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

export const Timer = ({ focusSubject }) => {
  /** focusSubject={focusSubject}   export const Timer = ({ focusSubject })
   * f={focusSubject}   export const Timer = ({ f }) this is also correct , and also input {f} everywhere  ex-> <Text style={styles.task}>{f}</Text>    */

  const [minutes, setMinutes] = useState(0.1);
  const [isStared, setIsStareted] = useState(false);

  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStareted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStared}
          onProgress={onProgress}
        />
      </View>

      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Timer goes here</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color="#0fc1fc"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
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