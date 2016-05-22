import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  listOfBooks: BooksReducer //Key is the piece of state and the value is the reducer itself
  //Reducer gets bound here to the key. You use state.listOfBooks to call this reducer in wherever you need.
});

export default rootReducer;
