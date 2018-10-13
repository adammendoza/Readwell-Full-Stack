import { connect } from 'react-redux';
import BookIndex from './book_index';
import { fetchAllBooks } from '../../actions/book_actions';


const mapStateTopProps = state => {
  return {
    books: Object.values(state.entities.books)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks())
  };
};


export default connect(mapStateTopProps, mapDispatchToProps)(BookIndex);
