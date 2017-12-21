const initialState = {
  byId: {
    1: {
      question: 'What is React?',
      answer: 'A JavaScript library for reusable components'
    },
    2: {
      question: 'In what language you write components?',
      answer: 'JSX'
    },
    3: {
      question: 'Is JavaScript strongly-typed?',
      answer: 'No'
    },
    4: {
      question: 'Does it have something to do with Java?',
      answer: 'No'
    },
    5:{
      question: 'What method is mandatory in every component?',
      answer: 'render'
    },
    6: {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  },
  allIds: [1, 2, 3, 4, 5, 6]
}

const question = (state = initialState, action) => {
  switch (action.type){
    default: 
      return state;
  }
}

export default question;