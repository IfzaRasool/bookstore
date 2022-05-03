import { v4 as uuidv4 } from 'uuid';

const ADD_BOOKS = 'src/redux/books/addBooks';
const REMOVE_BOOKS = 'src/redux/books/removeBooks';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.title,
          authorname: action.authorname,

        },
      ];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const additem = (title, authorname) => ({
  type: ADD_BOOKS,
  title,
  authorname,
});

export const removeitem = (id) => ({
  type: REMOVE_BOOKS,
  id,
});
export default bookReducer;