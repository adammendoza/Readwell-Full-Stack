import { connect } from 'react-redux';
import AddBookForm from './add_book_form';
import { postBook } from '../../actions/book_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.book,
  };
};


const mapDisptachToProps = dispatch => {
  return {
    postBook: book => dispatch(postBook(book))
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(AddBookForm);
