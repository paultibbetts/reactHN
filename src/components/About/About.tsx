import React, { useEffect } from 'react';
import { setTitle } from '../../helpers';

export const About: React.FC = () => {
  useEffect(() => {
    setTitle('about')
  })

  return (
    <div className="bg-white dark:bg-gray-600 p-2">
      <h2 className="text-xl font-bold mb-4 dark:text-white">About</h2>
      <p className="dark:text-white">
        Yet another Hacker News clone
      </p>
      <p className="dark:text-white">
        Featuring <a className="dark:hover:text-gray-700" href="https://reactjs.org/">React 16</a>, <a className="dark:hover:text-gray-700" href="https://reacttraining.com/react-router/">React Router 4</a>, <a className="dark:hover:text-gray-700" href="https://react-redux.js.org/">React Redux</a>, <a className="dark:hover:text-gray-700" href="https://github.com/gaearon/redux-thunk">Redux Thunk</a>, <a className="dark:hover:text-gray-700" href="https://github.com/cheeaun/node-hnapi/">HN API</a>, CSS variables, unread link highlighting and clickable links in comments.
      </p>
      <p className="dark:text-white">
        View the source code on <a className="dark:hover:text-gray-700" href="https://github.com/ptibbetts/reactHN">GitHub</a>
      </p>
      <p className="dark:text-white">
        <a
          className="<3"
          href="https://paultibbetts.uk"
        >
          <span role="img" aria-label="love">💙</span>
        </a>
      </p>
    </div>
  )
};