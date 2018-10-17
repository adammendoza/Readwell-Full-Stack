import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import bookshelvesReducer from './bookshelves_reducer';
import shelvingsReducer from './shelvings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  bookshelves: bookshelvesReducer,
  shelvings: shelvingsReducer
});

export default entitiesReducer;
