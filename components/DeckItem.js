import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { gray } from '../utils/colors';

const DeckItem = (props) => {
  return (
    <TouchableNativeFeedback style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {props.title}
        </Text>
        <Text style={styles.cardsText}>
          {`${props.cardsNumber} cards`}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 40,
    marginBottom: 5
  },
  cardsText: {
    fontSize: 18,
    color: gray
  }
})


export default DeckItem;