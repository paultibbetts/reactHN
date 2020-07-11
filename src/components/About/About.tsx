import React, { useEffect } from 'react';
import { setTitle } from '../../helpers';
import raw from "raw.macro";
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

const markdown = raw("../../../README.md");

export const About: React.FC = () => {
  useEffect(() => {
    setTitle('about')
  })

  return (
    <div className="About">
      {
        unified()
          .use(parse)
          .use(remark2react)
          .processSync(markdown).result
      }
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