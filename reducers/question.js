import { questionData } from '../utils/mockData';
import { GET_ALL_QUESTIONS, ADD_QUESTION } from '../actions/types';

const initialState = questionData;

const question = (state = { byId: {}, allIds: [] }, action) => {
  let { byId, allIds } = state;
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      if (!action.questions)
        return state;
      byId = action.questions;
      allIds: Object.keys(byId);
      return {
        byId,
        allIds
      }
    case ADD_QUESTION:
      byId[action.question.id] = action.question;
      allIds: Object.keys(byId);
      return {
        byId,
        allIds
      }
    default:
      return state;
  }
}

export default question;