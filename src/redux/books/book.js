/* eslint-disable arrow-body-style */
const addBooks = 'newbook';
const removeBooks = 'oldbook';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  if (action.type === 'addBooks') {
    console.log('addbooks');
    return state;
  } 
  else if {
    console.log('removebooks');
    return state-action.payload,
  }
  else {
      return state;
  }
};

export const additem = (book) => {
  return {
    type: addBooks,
  };
};

export const removeitem = (book) => {
  return {
    type: removeBooks,
  };
};
export default bookReducer;
