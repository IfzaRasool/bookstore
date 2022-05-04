import React from 'react';
import { useDispatch } from 'react-redux';
import { additem } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  return (
    <div className="addbook-container">
      <form>
        <h1 className="add-book">ADD NEW BOOK</h1>
        <input type="text" name="book-name" className="bookname-field" placeholder="Book title" />
        <input type="text" name="author-name" className="author-field" placeholder="Author" />
        <button type="button" className="book-add-btn" onClick={dispatch(additem(title = bookname - field.value, authorname = author - field.value))}>Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
