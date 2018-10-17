import { RECEIVE_BOOKSHELF_ERRORS, RECEIVE_BOOKSHELF, RECEIVE_ALL_BOOKSHELVES } from '../actions/bookshelf_actions';

const bookshelfErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKSHELF_ERRORS:
      return action.errors;
    case RECEIVE_BOOKSHELF:
      return [];
    case RECEIVE_ALL_BOOKSHELVES:
      return [];
    default:
      return state;
  }
}

export default bookshelfErrorsReducer;
