import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { gray, white } from '../utils/colors';

/**
 * @description Renders a deck list item that offers navigation to the detail view. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the deck's title and number of questions
 * and a function to execute on press event.
 */
const DeckItem = ({ onPress, title, cardCount }) => {
  return (
    <TouchableNativeFeedback onPress={onPress} style={styles.touchableContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.cardsText}>
          {`${cardCount} cards`}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

DeckItem.propTypes = {
  title: PropTypes.string.isRequired,
  cardCount: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    marginBottom: 5,
    backgroundColor: white,
    borderWidth: 0.5,
    borderColor: gray,
    borderRadius: 10,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
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