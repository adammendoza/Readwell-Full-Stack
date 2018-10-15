import React from 'react';


const BookPopUp = ({book}) => {
  return (
    <div className="book-pop-up">
      <h2>{book.title}</h2>
      <p>by {book.author}</p>
      <p>published {book.year}</p>
    </div>
  )
};

export default BookPopUp;
