import { GET_ALL_DECKS, ADD_DECK } from './types';
import { AsyncStorage } from 'react-native';

export const receiveDecks = (decks) => {
  debugger;
  return {
    type: GET_ALL_DECKS,
    decks
  }
}

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck
  }
}