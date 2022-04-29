import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <h1>BookStore CMS</h1>
      <nav>
        <Link to="/">BOOKS</Link>
        <Link to="/category">ACATEGORY</Link>
      </nav>
    </header>
  </div>
);

export default Header;
