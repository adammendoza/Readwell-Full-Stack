import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';

const receiveBookshelf = bookshelf => {
  return {
    type: RECEIVE_BOOKSHELF,
    bookshelf
  };
};

const receiveAllBookshelves = bookshelves => {
  return {
      type: RECEIVE_ALL_BOOKSHELVES,
      bookshelves
  };
};

const receiveBookshelfErrors = errors => {
  return {
    type: RECEIVE_BOOKSHELF_ERRORS,
    errors
  }
};

export const fetchAllBooks = () => dispatch => (
  BookshelfAPIUtil.getBookshelves().then(bookshelves => (
    dispatch(receiveAllBookshelves(bookshelves))
  ))
);

export const fetchBook = id => dispatch => (
  BookAPIUtil.getBook(id).then(book => (
    dispatch(receiveBook(book))
  ))
);
