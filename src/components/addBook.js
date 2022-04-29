import React from 'react';

const addBook = () => (
  <div>
    <form>
      <h1>ADD NEW BOOK</h1>
      <input type="text" name="book-name" />
      <input type="text" name="author-name" />
      <button type="button">Add Book</button>
    </form>
  </div>
);
export default addBook;
