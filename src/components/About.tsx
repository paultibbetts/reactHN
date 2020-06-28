import React, { useEffect } from 'react';
import { setTitle } from '../helpers';

const About: React.FC = () => {
  useEffect(() => {
    setTitle('about')
  })

  return (
    <div className="container">
      <div className="content about">
        <h2>About</h2>
        <p>
          Yet another Hacker News clone
        </p>
        <p>
          Featuring <a href="https://reactjs.org/">React 16</a>, <a href="https://reacttraining.com/react-router/">React Router 4</a>, <a href="https://react-redux.js.org/">React Redux</a>, <a href="https://github.com/gaearon/redux-thunk">Redux Thunk</a>, <a href="https://github.com/cheeaun/node-hnapi/">HN API</a>, unread link highlighting, clickable links in comments, dark mode <a href="https://github.com/ptibbetts/reactHN/pull/2">(#2)</a>, TailwindCSS, Storybook <a href="https://github.com/ptibbetts/reactHN/pull/2/commits/22cd78ccdc9e1bf275913ad1d66898a2bd0e0e0f">(22cd78c)</a>and playroom <a href="https://github.com/ptibbetts/reactHN/pull/2/commits/ae522750b8c2921eb1dfe716078b4695ce3661c6">(ae52275)</a>.
        </p>
        <p>
          View the source code on <a href="https://github.com/ptibbetts/reactHN">GitHub</a>
        </p>
        <p>
          <a className="<3" href="https://paultibbetts.uk">
            <span role="img" aria-label="love">💙</span>
          </a>
        </p>
      </div>
    </div>
  )
};

export default About;