import React from 'react';
import ShelfButton from './shelf_button';
import Reviews from '../reviews/reviews.jsx';

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
    const { book, postShelving, postBookshelf, fetchAllBookshelves, bookshelves, currentUser, deleteShelving } = this.props;
    if (!book) return null;

    return (
      <div className="book-show-page">
        <div className="show-left">
          <img src={book.cover_img}/>
          <ShelfButton
            book={book}
            bookshelves={bookshelves}
            postShelving={postShelving}
            fetchAllBookshelves={fetchAllBookshelves}
            postBookshelf={postBookshelf}
            currentUser={currentUser}
            deleteShelving={deleteShelving}
            />
        </div>

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

        <Reviews 
          reviews={book.reviews}
        />
      </div>
    );
  }
}

export default BookShowPage;
