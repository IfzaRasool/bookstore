import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/books';
import Header from './components/header';
import Category from './components/category';
import AddBook from './components/addBook';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/author" element={<Category />} />
        </Routes>
      </Router>
      <AddBook />
    </div>
  );
}

export default App;
