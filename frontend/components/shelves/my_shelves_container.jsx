import { connect } from 'react-redux';
import MyShelves from './my_shelves';
import { fetchAllBookshelves, deleteBookshelf, postBookshelf, updateBookshelf } from '../../actions/bookshelf_actions';

const mapStateTopProps = ({ entities, session }, ownProps) => {
  return {
    currentUser: entities.users[session.id],
    books: entities.books,
    bookshelves: Object.values(entities.bookshelves)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    deleteBookshelf: id => dispatch(deleteBookshelf(id)),
    postBookshelf: bookshelf => dispatch(postBookshelf(bookshelf)),
    updateBookshelf: bookshelf => dispatch(updateBookshelf(bookshelf))
  };
};


export default connect(mapStateTopProps, mapDispatchToProps)(MyShelves);
