import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ title, auth }) => (
  <div className="book-container">
    <div>
      <span className="action">Action</span>
      <h1 className="book-name">
        {title}

      </h1>
      <h6 className="author-name">{auth}</h6>
      <ul className="action-container">
        <li className="comments">Comments</li>
        <li className="remove">Remove</li>
        <li className="edit">Edit</li>
      </ul>
    </div>
    <div className="circle-wrapper"><div className="circle-inner" /></div>
    <div className="per">
      <span className="percentage">64%</span>
      <span className="comp">Completed</span>
    </div>
    <div className="chapter">
      <span className="current-chapter">CURRENT CHAPTER</span>
      <span className="chapter-name">Chapter 17</span>
      <button type="button" className="btn">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
};
export default Book;
