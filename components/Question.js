import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from './TextButton';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({ navigation }) => {
    const { questionId } = navigation.state.params

    return {
      title: `Question #${questionId}`
    }
  }

  render() {
    return (
      <View>
        <Text>Question View</Text>
      </View>
    )
  }
}