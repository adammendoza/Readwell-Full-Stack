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

        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <span>Published {book.year}</span>
          <div className="isbn"><span>ISBN</span> {book.isbn}</div>
        </div>

        <div className="genre">
          <h3>Genre</h3>
          <p>{book.genre}</p>
        </div>
      </div>
    );
  }
}

export default BookShowPage;
