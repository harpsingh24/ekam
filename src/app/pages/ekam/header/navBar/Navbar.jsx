import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/common"
            >
              <span>Drop Down</span>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </NavLink>
            <ul>
              <li>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/common"
                  href="#"
                >
                  Drop Down 1
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/common"
                  href="#"
                >
                  Drop Down 2
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
       
        <i class="fa fa-bars mobile-nav-toggle" aria-hidden="true"></i>
      </nav>
    </>
  );
};
export default Navbar;
