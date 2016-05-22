import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer //Key is the piece of state and the value is the reducer itself
});

export default rootReducer;
