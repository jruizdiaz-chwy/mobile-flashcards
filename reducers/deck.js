const initialState = {
  byId: {
    'Apps': {
      title: 'Apps',
    },
    'Udacity': {
      title: 'Udacity',
    },
    'Minecraft': {
      title: 'Minecraft',
    },
    'Soccer': {
      title: 'Soccer',
    },
    'React': {
      title: 'React',
    },
    'JavaScript': {
      title: 'JavaScript',
    }
  },
  allIds: ['React', 'JavaScript', 'Apps', 'Udacity', 'Minecraft', 'Soccer'],
}

const deck = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default deck;