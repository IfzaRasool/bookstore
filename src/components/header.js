import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="header">
      <h1 className="header-heading">Bookstore CMS</h1>
      <nav>
        <Link to="/" className="header-primary-heading">BOOKS</Link>
        <Link to="/category" className="header-secondary-heading">CATEGORIES</Link>
      </nav>
    </header>
  </div>
);

export default Header;
