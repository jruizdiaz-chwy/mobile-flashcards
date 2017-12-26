const initialState = {
  byId: {
    1: {
      id: 1,
      deck: 'React',
      question: 'What is React?',
      answer: 'A JavaScript library for reusable components',
    },
    2: {
      id: 2,
      deck: 'React',
      question: 'In what language you write components?',
      answer: 'JSX',
    },
    3: {
      id: 3,
      deck: 'JavaScript',
      question: 'Is JavaScript strongly-typed?',
      answer: 'No',
    },
    4: {
      id: 4,
      deck: 'JavaScript',
      question: 'Does it have something to do with Java?',
      answer: 'No',
    },
    5:{
      id: 5,
      deck: 'React',
      question: 'What method is mandatory in every component?',
      answer: 'render',
    },
    6: {
      id: 6,
      deck: 'JavaScript',
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.',
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