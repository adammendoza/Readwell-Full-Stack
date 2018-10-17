import {
  RECEIVE_BOOKSHELF,
  RECEIVE_ALL_BOOKSHELVES,
  REMOVE_BOOKSHELF
} from '../actions/bookshelf_actions';

import { merge } from 'lodash';


const bookshelvesReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      return merge({}, state, action.payload.bookshelves );
    case RECEIVE_ALL_BOOKSHELVES:
      return action.payload.bookshelves;
    case REMOVE_BOOKSHELF:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  };
};

export default bookshelvesReducer;
