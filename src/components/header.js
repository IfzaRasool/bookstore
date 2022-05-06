import React from 'react';
import { Link } from 'react-router-dom';
import login from './images/login.png';

const Header = () => (
  <div>
    <header className="header">
      <h1 className="header-heading">Bookstore CMS</h1>
      <nav>
        <Link to="/" className="header-primary-heading">BOOKS</Link>
        <Link to="/category" className="header-secondary-heading">CATEGORIES</Link>
        <img src={login} alt="login" />
      </nav>
    </header>
  </div>
);

export default Header;
