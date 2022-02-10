import React, { useState, useEffect } from "react";
// Built by Arsalan Rashid Khan

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  AsyncStorage,
} from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";
import { Timer } from "./src/features/timer/Timer";
import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";

const STATUSES = {
  COMPLETE: 1,
  CANCLED: 2,
};
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };
  console.log(focusHistory);

  const onClear = () => {
    setFocusHistory([]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).lenght) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);
  useEffect(() => {
    saveFocusHistory;
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {focusSubject ? (
        /** if you have a focus subject show the Timer else show the Focus */

        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithStatus(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithStatus(focusSubject, STATUSES.CANCLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        /* so the focusSubject={focusSubject}= f={focusSubject} ..you can name it whatever u like and pass it as in timer
         */

        <>
          <View style={{ flex: 1 }}>
            <Focus addSubject={setFocusSubject} />
            <FocusHistory focusHistory={focusHistory} onClear={onClear} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
    /* .OS is important as it define the platform */

    flex: 1,
    backgroundColor: colors.darkblue,
  },
});
