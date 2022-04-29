import { v4 as uuidv4 } from 'uuid';
import Book from './book';
import AddBook from './addBook';

const Books = () => {
  const bookstore = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      authorname: 'Suzanne Collin',
    },
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      authorname: 'Suzanne Collin',
    },
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      authorname: 'Suzanne Collin',
    },
  ];
  return (
    <div>
      {bookstore.map((e) => (
        <Book key={e.id} title={e.title} auth={e.authorname} />
      )) }
      <div>
        <AddBook />
      </div>

    </div>
  );
};
export default Books;
