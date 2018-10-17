import React from 'react';


class BookList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if(this.props.currShelf.length === 0){
      return null;
    }
    const books = this.props.currShelf[0].bookIds.map(bookId => this.props.books[bookId]);
    const rows = books.map(book => (
      <tr>
        <td><img src={book.cover_img}/></td>
        <td>{book.title}</td>
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
