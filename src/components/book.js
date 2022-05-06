import React from 'react';
import { PropTypes } from 'prop-types';
import Progressbar from 'react-js-progressbar';

const Book = ({
  onRemove, title, auth, category,
}) => (
  <div className="book-container">
    <div>
      <span className="action">{category}</span>
      <h1 className="book-name">
        {title}
      </h1>
      <h6 className="author-name">{auth}</h6>
      <div className="action-container">
        <span className="comments">Comments</span>
        <hr className="hr" />
        <button type="button" className="remove" onClick={onRemove}>
          remove
        </button>
        <hr className="hr" />
        <span className="edit">Edit</span>
      </div>
    </div>
    <div id="progressbarContainer">
      <Progressbar
        input={20}
        pathWidth={10}
        pathColor={['#0290ff', '#0290ff']} // use an array for gradient color.
        trailWidth={20}
        trailColor="#e8e8e8"
        textStyle={{ fill: 'white' }}
      />
    </div>
    <div className="per">
      <span className="percentage">20%</span>
      <span className="comp">Completed</span>
      <hr className="hr2" />
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
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default Book;
