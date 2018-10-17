import {
  RECEIVE_BOOK,
  RECEIVE_ALL_BOOKS
} from '../actions/book_actions';
import { RECEIVE_BOOKSHELF, RECEIVE_ALL_BOOKSHELVES } from '../actions/bookshelf_actions';
import { merge } from 'lodash';


const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book})
    case RECEIVE_ALL_BOOKS:
      return action.books;
    case RECEIVE_BOOKSHELF:
      if(action.payload.books){
        return merge({}, state, action.payload.books)
      }
      return state;
    case RECEIVE_ALL_BOOKSHELVES:
      if(action.payload.books){
        return merge({}, state, action.payload.books)
      }
      return state;
    default:
      return state;
  };
};

export default booksReducer;
