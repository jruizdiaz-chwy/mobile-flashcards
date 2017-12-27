import { questionData } from '../utils/mockData';

const initialState = questionData;

const question = (state = initialState, action) => {
  switch (action.type){
    default: 
      return state;
  }
}

export default question;