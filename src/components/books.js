/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
import Book from './book';
import AddBook from './addBook';

const Books = () => {
  const bookstore = [
    'The Hunger Games',
    'Suzanne Collin',
    'The Hunger Games',
  ];
  return (
    <div>
      {bookstore.map((e) => (
        <Book title={e} auth="Suzanne Collins" />
      )) }
      <div>
        <AddBook />
      </div>

    </div>
  );
};
export default Books;
