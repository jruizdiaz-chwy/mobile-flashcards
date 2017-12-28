import { GET_ALL_QUESTIONS, ADD_QUESTION } from './types';
import { AsyncStorage } from 'react-native';

//ACTION CREATORS
export const receiveQuestions = (questions) => {
  return {
    type: GET_ALL_QUESTIONS,
    questions
  }
}

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  }
}