import React from 'react';

const Book = () => (
  <div>
    <p>Action</p>
    <h1>The Hunger Games</h1>
    <h6>Suzanne Collins</h6>
    <ul>
      <li>Comments</li>
      <li>Remove</li>
      <li>Edit</li>
    </ul>
    <img src="./images/progress.png" alt="progress-img" />
    <p>64%</p>
    <div>
      <p>current Chapter</p>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>

  </div>
);
export default Book;
