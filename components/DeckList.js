import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from './TextButton';

export default class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Deck List View</Text>
        <TextButton
          onPress={() => this.props.navigation.navigate('NewDeck')}
          style={styles.textBtn}
        >
          Add Deck
        </TextButton>
        <View style={styles.container}>
          <TextButton
            onPress={() => this.props.navigation.navigate(
              'Deck',
              { id: 1 }
            )}
            style={styles.textBtn}
          >
            Deck #1
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // textBtn: {
  //   position: 'absolute',
  //   width: 60,  
  //   height: 60, 
  //   right: 10,
  //   bottom: 10,
  // }
})