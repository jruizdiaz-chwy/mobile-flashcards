import { deckData } from '../utils/mockData';
import { GET_ALL_DECKS, ADD_DECK } from '../actions/types';

const initialState = deckData;

const deck = (state = { byId: {}, allIds: [] }, action) => {
  let { byId, allIds } = state;
  switch (action.type) {
    case GET_ALL_DECKS:
      if (!action.decks)
        return state;
      byId = action.decks;
      allIds: Object.keys(byId);
      return {
        byId,
        allIds
      }
    case ADD_DECK:
      byId[action.deck.title] = action.deck;
      allIds: Object.keys(byId);
      return {
        byId,
        allIds
      }
    default:
      return state;
  }
}

export default deck;