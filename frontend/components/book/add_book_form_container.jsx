import { connect } from 'react-redux';
import AddBookForm from './add_book_form';
import { postBook, receiveErrors } from '../../actions/book_actions';

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors.books,
  };
};


const mapDisptachToProps = dispatch => {
  return {
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    postBook: book => dispatch(postBook(book))
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(AddBookForm);
