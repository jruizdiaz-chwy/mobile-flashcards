const initialState = {
  byId: {
    'React': {
      title: 'React',
      questions: [1,2,5]
    },
    'JavaScript': {
      title: 'JavaScript',
      questions: [3,4,6]
    },
    'Apps': {
      title: 'Apps',
      questions: [1,2,5]
    },
    'Udacity': {
      title: 'Udacity',
      questions: [3,4,6]
    },
    'Minecraft': {
      title: 'Minecraft',
      questions: [1,2,5]
    },
    'Soccer': {
      title: 'Soccer',
      questions: [3,4,6]
    },
  },
  allIds: ['React', 'JavaScript', 'Apps', 'Udacity', 'Minecraft', 'Soccer'],
}

const deck = (state = initialState, action) => {
  switch (action.type){
    default: 
      return state;
  }
}

export default deck;