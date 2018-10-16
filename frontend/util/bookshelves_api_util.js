export const getBookshelves = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookshelves'
  });
);

export const getBookshelf = bookshelfId => (
  $.ajax({
    mehtod: 'GET',
    url: `api/books/${bookshelfId}`
  });
);

export const postBookshelf = bookshelf => (
  $.ajax({
    method: 'POST',
    url: 'api/bookshelves',
    data: { bookshelf }
  });
);

export const updateBookshelf = bookshelf => (
  $.ajax({
    method: 'PUT',
    url: `api/bookshelves/${bookshelf.id}`,
    data: { bookshelf }
  });
);

export const deleteBookshelf = bookshelfId => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookshelves/${bookshelfId}`
  });
);
