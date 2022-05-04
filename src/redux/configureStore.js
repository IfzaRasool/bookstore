import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoryReducer,

});

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
