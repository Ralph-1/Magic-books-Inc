import { combineReducers } from 'redux';
import books from './books';
import catfilter from './filter';

const rootReducer = combineReducers({
  books,
  catfilter,
});

export default rootReducer;
