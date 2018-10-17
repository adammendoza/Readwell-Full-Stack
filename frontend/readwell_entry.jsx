import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { fetchAllBookshelves, fetchBookshelf, postBookshelf, updateBookshelf, deleteBookshelf } from './actions/bookshelf_actions';

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
  window.fetchAllBookshelves = fetchAllBookshelves;
  window.fetchBookshelf = fetchBookshelf;
  window.postBookshelf = postBookshelf;
  window.updateBookshelf = updateBookshelf;
  window.deleteBookshelf = deleteBookshelf;
  // #NB

  ReactDOM.render(<Root store={store} />, root);
});
