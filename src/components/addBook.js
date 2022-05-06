import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const id = uuidv4();
    dispatch(createBook(id, title.value, author.value, category.value));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div className="addbook-container">
      <form onSubmit={submitForm}>
        <h1 className="add-book">ADD NEW BOOK</h1>
        <input type="text" name="title" className="bookname-field" placeholder="Title" required />
        <input type="text" name="author" className="author-field" placeholder="Author" required />
        <select name="category" className="category-field">
          <option value="Categories">Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
        </select>
        <button type="submit" className="book-add-btn">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
