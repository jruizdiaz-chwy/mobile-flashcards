import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { green } from '../utils/colors';

/**
 * @description Renders a plain text button. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the button's text color, the function to execute
 * on press event and a style object to customize it's rendering.
 */
const TextButton = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.number
}

export default TextButton;