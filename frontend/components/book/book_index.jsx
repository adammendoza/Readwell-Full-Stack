import React from 'react';
import merge from 'lodash';
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
      books = this.props.books.map(book => <BookIndexItem key={book.id} book={book}/>);
    } else {
      books = '';
    }
    return (
      <div className="book-index">
        <h3>Classics</h3>
          <ul>
            {books}
          </ul>
      </div>
      );
    }
};

export default BookIndex;
