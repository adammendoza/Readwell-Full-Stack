import * as BookshelfAPIUtil from '../util/bookshelves_api_util';
import * as ShelvingAPIUtil from '../util/shelvings_api_util';

export const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';

const receiveBookshelf = payload => {
  return {
    type: RECEIVE_BOOKSHELF,
    payload
  };
};

const receiveAllBookshelves = payload => {
  return {
      type: RECEIVE_ALL_BOOKSHELVES,
      payload
  };
};

const receiveBookshelfErrors = errors => {
  return {
    type: RECEIVE_BOOKSHELF_ERRORS,
    errors
  }
};

const removeBookshelf = id => {
  return {
    type: REMOVE_BOOKSHELF,
    id
  }
}

export const fetchAllBookshelves = () => dispatch => (
  BookshelfAPIUtil.getBookshelves().then(bookshelves => (
    dispatch(receiveAllBookshelves(bookshelves))
  ))
);

export const fetchBookshelf = id => dispatch => (
  BookshelfAPIUtil.getBookshelf(id).then(bookshelf => (
    dispatch(receiveBookshelf(bookshelf))
  ))
);

export const deleteBookshelf = id => dispatch => (
  BookshelfAPIUtil.deleteBookshelf(id).then(
    bookshelves => dispatch(receiveAllBookshelves(bookshelves))
  )
);

export const postBookshelf = bookshelf => disptach => {

  return BookshelfAPIUtil.postBookshelf(bookshelf).then(
    bookshelf => dispatch(receiveBookshelf(bookshelf)),
    errors => dispatch(receiveBookshelfErrors(errors))
  )
};

export const updateBookshelf = bookshelf => dispatch => (
  BookshelfAPIUtil.updateBookshelf(bookshelf).then(
    bookshelf => dispatch(receiveBookshelf(bookshelf)),
    errors => dispatch(receiveBookshelfErrors(errors))
  )
);

export const postShelving = shelving => dispatch => (
  ShelvingAPIUtil.postShelving(shelving).then(
    bookshelf => (dispatch(receiveBookshelf(bookshelf)))
  )
);
