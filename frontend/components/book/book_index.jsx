import React from 'react';
import merge from 'lodash';
import { Link } from 'react-router-dom';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBooks();
  }

  render(){
    let books;
    if (this.props.books.length > 0){
      books = this.props.books
      books = books.map(book =>{
        return(
          <Link to={`/books/${book.id}`}>
            <img src={book.cover_img}></img>
          </Link>
        );
      });
    } else {
      books = '';
    }
    return (
        <ul>
          {books}
        </ul>
      );
    }
};

export default BookIndex;
