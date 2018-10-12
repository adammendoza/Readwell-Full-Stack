export const getBooks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/books'
  });
};

export const getBook = bookId => {
  return $.ajax({
    method: 'GET',
    url: `api/books/${bookId}`
  });
};

export const postBook = book => {
  return $.ajax({
    method: 'POST',
    url: `api/books`,
    data: { book }
  });
};
