import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'mobileflashcards:decks';
export const QUESTION_STORAGE_KEY = 'mobileflashcards:questions';

export const fetchDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY);
}

export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title] : deck
  }))
}

export const fetchQuestions = () => {
  return AsyncStorage.getItem(QUESTION_STORAGE_KEY);
}

export const saveQuestion = (question) => {
  return AsyncStorage.mergeItem(QUESTION_STORAGE_KEY, JSON.stringify({
    [question.id]: question
  }))
}