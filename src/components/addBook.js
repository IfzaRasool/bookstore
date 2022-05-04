import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { additem } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');

  const handleChange = (e) => {
    const bookName = e.target.value;

    settitle(bookName);
  };

  const handleChange1 = (e) => {
    const author = e.target.value;

    setauthor(author);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(additem(id, title, author));
  };

  return (
    <div className="addbook-container">
      <form onSubmit={submitForm}>
        <h1 className="add-book">ADD NEW BOOK</h1>
        <input type="text" name="title" className="bookname-field" placeholder="Book title" onChange={handleChange} required />
        <input type="text" name="author" className="author-field" placeholder="Author" onChange={handleChange1} required />
        <button type="submit" className="book-add-btn">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
