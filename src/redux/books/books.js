import { v4 as uuidv4 } from 'uuid';

const ADD_BOOKS = 'ADD_BOOKS';
const REMOVE_BOOKS = 'REMOVE_BOOKS';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FJTfftHpycguiZ5QwrZd/books';

export const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          authorname: action.authorname,
          category: action.category,

        },
      ];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const additem = (id, title, authorname, category) => ({
  type: ADD_BOOKS,
  id,
  title,
  authorname,
  category,
});

export const removeitem = (id) => ({
  type: REMOVE_BOOKS,
  id,
});

export async function fetchBooks(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const objValues = Object.entries(data);
  objValues.forEach((element) => {
    const bookId = uuidv4();
    const bookTitle = element[1][0].title;
    const bookAuthor = element[1][0].author;
    const bookCategory = element[1][0].category;
    dispatch(additem(bookId, bookTitle, bookAuthor, bookCategory));
  });
}

export const createBook = (id, title, author, category) => async (dispatch) => {
  const result = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (result) {
    dispatch(additem(id, title, author, category));
  }
};

export const removeBook = (id) => async (dispatch) => {
  const result = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (result) {
    dispatch(removeitem(id));
  }
};
export default bookReducer;
