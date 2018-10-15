import React from 'react';

class BookShowPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.props.fetchBook(this.props.match.params.bookId);
    }
  }

  render(){
    const { book } = this.props;
    if (!book) return null;

    return (
      <div className="book-show-page">
        <img src={book.cover_img}/>
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <p>Published {book.year}</p>
        <label>ISBN
        <p>{book.isbn}</p></label>
        <label>Genre
        <p>{book.genre}</p></label>

      </div>
    );
  }
}

export default BookShowPage;
