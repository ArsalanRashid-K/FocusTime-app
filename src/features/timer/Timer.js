import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";

import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject }) => {
  useKeepAwake();

  /** focusSubject={focusSubject}   export const Timer = ({ focusSubject })
   * f={focusSubject}   export const Timer = ({ f }) this is also correct , and also input {f} everywhere  ex-> <Text style={styles.task}>{f}</Text>    */

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  //the progress here is 1 is the progress bar

  onProgress = (progress) => {
    setProgress(progress);
    /**onProgress =(pr)=>{setProgress(pr)}  trial name
     * this is getting its data from onPess={onProgress} or onProgress={onProgress}
     * this onProgress function tell how much progress is left, it is getting it from Countdown  onProgress or onPess..
     * onProgress =(progress)->this get its data from onPess or other name onProgress .. and pass it to a variable (progress) or (pr)
     * (pr) or (progress) -> this sets the value of setProgress
     */
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(5000), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
          /**onPess={onProgress}  trial name
           * onProgress or onPess is getting the data from Countdown.
           * than onProgress or onPess ..pass that data down to {onProgress} this funtion
           * so , onPess get data from countdown and send it to onProgress . Then onProgress ... check the onProgress
           */
        />
      </View>

      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          // progress={} inside the curly braces we can add value 0-1 that  the progress bar life . but here we gave this a varible in curly braces name also progress
          color="#31c4f5"
          style={{ height: 10 }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
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
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
