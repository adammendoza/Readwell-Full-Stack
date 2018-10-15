import { connect } from 'react-redux';
import BookShowPage from './book_show_page';
import { fetchBook } from '../../actions/book_actions';

const mapStateTopProps = (state, ownProps) => {
  const book = state.entities.books[ownProps.match.params.bookId];
  return { book };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: (id) => dispatch(fetchBook(id))
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(BookShowPage);
