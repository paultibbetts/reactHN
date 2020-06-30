import React from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../helpers';

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

const navLinkClass = 'inline-block text-white p-3 hover:text-blue-500 border-transparent border-b-2';
const navLinkActiveClass = 'border-blue-500 text-blue-500';

export const Navigation: React.FC = () => (
  <nav
    className="sm:sticky top-0 bg-black-600"
    onClick={() => scrollToTop()}
  >
    <div className="max-w-screen-lg mx-auto">
      <ul className="flex flex-col sm:flex-row items-center flex-wrap">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.dest}
              className={navLinkClass}
              activeClassName={navLinkActiveClass}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="sm:ml-auto">
          <NavLink to="/about"
            className={navLinkClass}
            activeClassName={navLinkActiveClass}
          >
            about
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);