import React from 'react';
import { Link } from 'react-router-dom';


const BookIndexItem = ({ book }) => (
  <Link to={`/books/${book.id}`}><img src={book.cover_img}/></Link>
);

export default BookIndexItem;
