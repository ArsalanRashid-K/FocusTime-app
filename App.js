import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import{colors} from './src/utils/colors'
import{spacing} from './src/utils/sizes'

export default function App() {
  const [focusSubject , setFocusSubject] = useState("gardening");
  return (
    <View style={styles.container}>
    
    {/* ternary operator ? ( ) : ( )   */}

      { focusSubject ? (
        /* to do inline style || style={{margin:100}}   || this is the way 2 curly braces */       
        <Timer focusSubject={focusSubject}/>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
         

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:Platform.OS=== 'ios' ? spacing.md : spacing.lg,
     /* .OS is important as it define the platform */

    flex: 1,
    backgroundColor: colors.darkred,
  },
});