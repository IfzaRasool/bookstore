import Redux from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = Redux.combineReducers({
  bookReducer,
  categoryReducer,

});

const store = Redux.ConfigureStore(reducer);

export default store;
