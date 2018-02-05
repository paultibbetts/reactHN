import React from 'react';
import { NavLink } from 'react-router-dom';

// Top news has a slightly different URL structure
const isTopNews = (match, location) => {
  if (! match) return;
  const exp = '^/[0-9]+$';
  return new RegExp(exp).test(location.pathname);
}

const links = [
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
  <nav className="navigation">
    <div className="container">
      <ul className="navigation__list">
        <li className="navigation__listItem">
          <NavLink 
            to="/" 
            className={className}
            activeClassName={activeClassName}
            isActive={isTopNews}
          >
            top
          </NavLink>
        </li>
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