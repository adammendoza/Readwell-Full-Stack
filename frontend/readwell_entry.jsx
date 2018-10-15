import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { fetchAllBooks, fetchBook } from './actions/book_actions';
import { postBook } from './util/book_api_util';
document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TEST #TODO
  window.dispatch = store.dispatch;
  window.fetchAllBooks = fetchAllBooks;
  window.fetchBook = fetchBook;
  window.postBook = postBook;
  // #NB

  ReactDOM.render(<Root store={store} />, root);
});
