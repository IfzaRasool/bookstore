import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const categoryStore = useSelector((state) => state.categoryReducer);

  const checkStatus = () => {
    dispatch(categoryStatus());
  };

  return (
    <div>
      <section className="category-section">
        <h1>{categoryStore}</h1>
      </section>
      <button type="button" className="category-btn" onClick={() => { checkStatus(); }}>Check status</button>
    </div>
  );
};
export default Category;
