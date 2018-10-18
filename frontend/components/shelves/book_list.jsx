import React from 'react';
import { Link } from 'react-router-dom';



class BookList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if(this.props.currShelf.length === 0){
      return null;
    }
    if(this.props.currShelf[0].bookIds.length === 0){
      return <h3>There are no books in here yet!</h3>
    }
    const books = this.props.currShelf[0].bookIds.map(bookId => this.props.books[bookId]);
    const rows = books.map(book => (
      <tr key={book.id}>
        <td><Link to={`/books/${book.id}`}><img src={book.cover_img}/></Link></td>
        <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.year}</td>
      </tr>
    ));
    return(
      <table className="book-list">
        <thead>
          <tr>
            <th>cover</th>
            <th>title</th>
            <th>author</th>
            <th>genre</th>
            <th>year published</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default BookList;
