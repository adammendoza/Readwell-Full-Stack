import React from 'react';


const BookPopUp = ({ book }) => {
  return (
    <div className="book-pop-up">
      <h2>{book.title}</h2>
      <p className="pop-up-author">by {book.author}</p>
      <p className="pop-up-year">- published {book.year}</p>
    </div>
  );
};

export default BookPopUp;
