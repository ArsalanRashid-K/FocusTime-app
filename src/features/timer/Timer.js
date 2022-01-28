import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import{colors} from  "../../utils/colors"
import {fontSizes,spacing} from "../../utils/sizes"

export const Timer = ({ focusSubject }) => {
   /** focusSubject={focusSubject}   export const Timer = ({ focusSubject })
   * f={focusSubject}   export const Timer = ({ f }) this is also correct , and also input {f} everywhere  ex-> <Text style={styles.task}>{f}</Text>    */

  return (
    <View style={styles.container}>
      <View style={{paddingTop: spacing.xxl}}>
        <Text style={styles.title} >Timer goes here</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    title:{
      color:colors.white,
      textAlign:'center'      
    },
    task:{
       color:colors.white,
      textAlign:'center'   ,
      fontWeight:'bold'
       
      
    }
});
