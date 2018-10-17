import {
  RECEIVE_BOOKSHELF,
  RECEIVE_ALL_BOOKSHELVES,
} from '../actions/bookshelf_actions';

import { merge } from 'lodash';


const shelvingsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      return action.payload.shelvings;
    case RECEIVE_ALL_BOOKSHELVES:
      return action.payload.shelvings;
    default:
      return state;
  };
};

export default shelvingsReducer;
