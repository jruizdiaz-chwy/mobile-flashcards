import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from './TextButton';

export default class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck View</Text>
        <TextButton
          onPress={() => this.props.navigation.navigate('DeckList')}
        >
          Cancel
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})