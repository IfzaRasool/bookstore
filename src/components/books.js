import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import AddBook from './addBook';
import { removeBook } from '../redux/books/books';

const Books = () => {
  const bookstore = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {bookstore.map((e) => (
        <Book
          key={e.id}
          title={e.title}
          auth={e.authorname}
          category={e.category}
          onRemove={() => dispatch(removeBook(e.id))}
        />
      ))}
      <div>
        <AddBook />
      </div>
    </div>
  );
};
export default Books;
