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
        Featuring <a className="dark:hover:text-gray-700" href="https://reactjs.org/">React 16</a>, <a className="dark:hover:text-gray-700" href="https://reacttraining.com/react-router/">React Router 4</a>, <a className="dark:hover:text-gray-700" href="https://react-redux.js.org/">React Redux</a>, <a className="dark:hover:text-gray-700" href="https://github.com/gaearon/redux-thunk">Redux Thunk</a>, <a className="dark:hover:text-gray-700" href="https://github.com/cheeaun/node-hnapi/">HN API</a>, CSS variables, unread link highlighting, clickable links in comments, dark mode <a href="https://github.com/ptibbetts/reactHN/pull/2">(#2)</a>, TailwindCSS, Storybook <a href="https://github.com/ptibbetts/reactHN/pull/2/commits/22cd78ccdc9e1bf275913ad1d66898a2bd0e0e0f">(22cd78c)</a>and playroom <a href="https://github.com/ptibbetts/reactHN/pull/2/commits/ae522750b8c2921eb1dfe716078b4695ce3661c6">(ae52275)</a>.
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