import { connect } from 'react-redux';
import BookShowPage from './book_show_page';
import { fetchBook } from '../../actions/book_actions';
import { fetchAllBookshelves, postBookshelf, postShelving, deleteShelving } from '../../actions/bookshelf_actions';

const mapStateTopProps = ({ entities, session }, ownProps) => {
  const book = entities.books[ownProps.match.params.bookId];
  const bookshelves = Object.values(entities.bookshelves)
  return { book, bookshelves, currentUser: entities.users[session.id] };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    postBookshelf: bookshelf => dispatch(postBookshelf(bookshelf)),
    postShelving: shelving => dispatch(postShelving(shelving)),
    deleteShelving: id => dispatch(deleteShelving(id))
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(BookShowPage);
