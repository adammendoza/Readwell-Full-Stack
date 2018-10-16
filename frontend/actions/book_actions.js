import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';

const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

const receiveBook = book => {
  return {
    type: RECEIVE_BOOK,
    book
  }
};

export const receiveErrors = errors => {
  return{
    type: RECEIVE_BOOK_ERRORS,
    errors
  };
};

export const fetchAllBooks = () => dispatch => (
  BookAPIUtil.getBooks().then(books => (
    dispatch(receiveAllBooks(books))
  ))
);

export const fetchBook = id => dispatch => (
  BookAPIUtil.getBook(id).then(book => (
    dispatch(receiveBook(book))
  ))
);

export const postBook = book => dispatch => {
  return BookAPIUtil.postBook(book).then(book => (
    dispatch(receiveBook(book))
  ), err => {
    dispatch(receiveErrors(err.responseJSON))
  })
};
