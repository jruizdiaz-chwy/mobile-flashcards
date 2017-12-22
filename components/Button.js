import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ backgroundColor, textColor, onPress, children }) => {
  return (
    <TouchableOpacity 
      style={[styles.androidButton, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  androidButton: {
    width: 200,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Button;