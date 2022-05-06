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
        <input type="text" name="title" className="bookname-field" placeholder="Book title" required />
        <input type="text" name="author" className="author-field" placeholder="Author" required />
        <input type="text" name="category" className="author-field" placeholder="category" required />
        <button type="submit" className="book-add-btn">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
