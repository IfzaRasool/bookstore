import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoryReducer,

});

const store = createStore(reducer, {}, applyMiddleware(logger));

export default store;
