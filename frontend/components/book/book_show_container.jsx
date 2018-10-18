import { connect } from 'react-redux';
import BookShowPage from './book_show_page';
import { fetchBook } from '../../actions/book_actions';
import { fetchAllBookshelves, postShelving } from '../../actions/bookshelf_actions';

const mapStateTopProps = ({ entities }, ownProps) => {
  const book = entities.books[ownProps.match.params.bookId];
  const bookshelves = Object.values(entities.bookshelves)
  return { book, bookshelves };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    postShelving: shelving => dispatch(postShelving(shelving))
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(BookShowPage);
