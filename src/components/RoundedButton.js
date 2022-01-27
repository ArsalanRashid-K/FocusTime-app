import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
    {/* ToucableOpacity -> fades when you click on anything it is applied on to make it look it has been press, but it is not and cant not be pressed or submit . 
    // onPress-> make the button pressable , with this the button know it has been pressed .. but not submitted anything */}
          <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
         
    </TouchableOpacity>
    
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,

      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 2,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
  });