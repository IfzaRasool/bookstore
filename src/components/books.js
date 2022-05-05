import { useSelector } from 'react-redux';
import Book from './book';
import AddBook from './addBook';

const Books = () => {
  const bookstore = useSelector((state) => state.bookReducer);

  return (
    <div>
      {bookstore.map((e) => (
        <Book key={e.id} title={e.title} auth={e.authorname} id={e.id} category={e.category} />
      )) }
      <div>
        <AddBook />
      </div>

    </div>
  );
};
export default Books;
