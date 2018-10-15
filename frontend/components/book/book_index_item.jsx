import React from 'react';
import { Link } from 'react-router-dom';
import BookPopUp from './book_pop_up';


const BookIndexItem = ({ book }) => (
  <div>
    <Link to={`/books/${book.id}`}><img src={book.cover_img}/></Link>
    <BookPopUp book={book}/>
  </div>
);

export default BookIndexItem;
