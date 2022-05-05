/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeitem } from '../redux/books/books';

const Book = ({
  id, title, auth, category,
}) => {
  const dispatch = useDispatch();

  const removeClick = (id) => {
    dispatch(removeitem(id));
  };

  return (
    <div className="book-container">
      <div>
        <span className="action">{category}</span>
        <h1 className="book-name">
          {title}
        </h1>
        <h6 className="author-name">{auth}</h6>
        <div className="action-container">
          <span className="comments">Comments</span>
          <button type="button" className="remove" id={id} onClick={() => { removeClick(id); }}>
            remove
          </button>
          <span className="edit">Edit</span>
        </div>
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
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
