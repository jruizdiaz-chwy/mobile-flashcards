import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'mobileflashcards:decks';
export const QUESTION_STORAGE_KEY = 'mobileflashcards:questions';

/**
 * @description Retrieves the deck object stored under the DECK_STORAGE_KEY.
 * @return {Promise}
 */
export const fetchDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => JSON.parse(res));
}

/**
 * @description Adds a new deck property to the deck object stored under the DECK_STORAGE_KEY.
 * @return {Promise}
 */
export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title] : deck
  }))
}

/**
 * @description Retrieves the question object stored under the QUESTION_STORAGE_KEY.
 * @return {Promise}
 */
export const fetchQuestions = () => {
  debugger;
  return AsyncStorage.getItem(QUESTION_STORAGE_KEY).then(res => JSON.parse(res));
}

/**
 * @description Adds a new question property to the question object stored under the QUESTION_STORAGE_KEY.
 * @return {Promise}
 */
export const saveQuestion = (question) => {
  return AsyncStorage.mergeItem(QUESTION_STORAGE_KEY, JSON.stringify({
    [question.id]: question
  }))
}