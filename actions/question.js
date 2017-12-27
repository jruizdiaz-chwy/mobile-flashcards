import { GET_ALL_QUESTIONS, ADD_QUESTION } from './types';
import { AsyncStorage } from 'react-native';

export const receiveQuestions = () => {
  return {
    type: GET_ALL_QUESTIONS,
    questions
  }
}

export const addQuestion = () => {
  return {
    type: ADD_QUESTION,
    question
  }
}