import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * @description Renders a button with feedback that performs a specified action when pressed. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the button's backgorund and text color, 
 * the function to execute on press event and a node to render inside the button component.
 */
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

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
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