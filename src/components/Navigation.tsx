import React from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../helpers';

const links: { dest: string, label: string }[] = [
  {
    dest: "/news",
    label: "top"
  },
  {
    dest: "/newest",
    label: "new"
  },
  {
    dest: "/show",
    label: "show"
  },
  {
    dest: "/ask",
    label: "ask"
  },
  {
    dest: "/jobs",
    label: "jobs"
  }
];

const className = "navigation__link";
const activeClassName = `${className}--active`;

const Navigation = () => (
  <nav
    className="navigation"
    onClick={() => scrollToTop()}
  >
    <div className="container">
      <ul className="navigation__list">
        {links.map((link, index) => (
          <li className="navigation__listItem" key={index}>
            <NavLink
              to={link.dest}
              className={className}
              activeClassName={activeClassName}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="navigation__listItem navigation__listItem--about">
          <NavLink to="/about"
            className={className}
            activeClassName={activeClassName}
          >
            about
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;