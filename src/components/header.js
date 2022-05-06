import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

const Header = () => (
  <div>
    <header className="header">
      <h1 className="header-heading">Bookstore CMS</h1>
      <nav>
        <Link to="/" className="header-primary-heading">BOOKS</Link>
        <Link to="/category" className="header-secondary-heading">CATEGORIES</Link>
      </nav>
      <h2 className="login">
        <VscAccount />
      </h2>
    </header>
  </div>
);

export default Header;
