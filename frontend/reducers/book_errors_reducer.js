import { RECEIVE_BOOK_ERRORS, RECEIVE_BOOK, RECEIVE_ALL_BOOKS } from '../actions/book_actions';

const bookErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
      return action.errors;
    case RECEIVE_BOOK:
      return [];
    case RECEIVE_ALL_BOOKS:
      return [];
    default:
      return state;
  }
};

export default bookErrorsReducer;
