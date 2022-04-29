import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/books';
import Header from './components/header';
import Category from './components/category';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
