import { connect } from 'react-redux';
import AddBookForm from './add_book_form';
import { postBook, receiveErrors } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';


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

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(AddBookForm));
