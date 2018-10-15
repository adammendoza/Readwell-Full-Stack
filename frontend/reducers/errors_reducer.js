import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import bookErrorsReducer from './book_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  book: bookErrorsReducer
});

export default errorsReducer;
