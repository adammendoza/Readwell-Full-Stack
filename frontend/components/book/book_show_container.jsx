import { connect } from 'react-redux';
import BookShowPage from './book_show_page';
import { fetchBook } from '../../actions/book_actions';

const mapStateTopProps = (state, ownProps) => {
  const book = state.entities.books[ownProps.match.params.bookId];
  debugger;
  return { book };
};

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    fetchBook: (id) => dispatch(fetchBook(id))
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(BookShowPage);
