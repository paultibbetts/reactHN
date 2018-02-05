import React from 'react';

const About = () => (
  <div className="container">
    <div className="content about">
      <h2>About</h2>
      <p>
        Yet another Hacker News clone
      </p>
      <p> 
        Featuring <a href="https://reactjs.org/">React 16</a>, <a href="https://reacttraining.com/react-router/">React Router 4</a>, <a href="https://redux.js.org/docs/basics/UsageWithReact.html">React Redux</a>, <a href="https://github.com/gaearon/redux-thunk">Redux Thunk</a>, <a href="https://github.com/cheeaun/node-hnapi/">HN API</a>, CSS variables, unread link highlighting and clickable links in comments.
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
);

export default About;