import {
  RECEIVE_BOOK,
  RECEIVE_ALL_BOOKS
} from '../actions/book_actions';
import { merge } from 'lodash';


const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book})
    case RECEIVE_ALL_BOOKS:
      return action.books;
    default:
      return state;
  };
};

export default booksReducer;
