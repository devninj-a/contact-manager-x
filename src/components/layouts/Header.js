import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm bg-light mb-4">
      <div className="container" style={{ maxWidth: '600px' }}>
        <NavLink to="/" className="navbar-brand">
          {brand}
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact/create"
                className="nav-link"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-link"
                activeStyle={{ fontWeight: 'bold' }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brand: 'My App'
};

export default Header;
