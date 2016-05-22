import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  activeBook: ActiveBook,
  listOfBooks: BooksReducer //Key is the piece of state and the value is the reducer itself
  //Reducer gets bound here to the key. You use state.listOfBooks to call this reducer in wherever you need.
});

export default rootReducer;
