import configureStore, { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoryReducer,

});

const store = configureStore(reducer);

export default store;
