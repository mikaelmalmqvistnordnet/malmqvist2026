/* eslint-disable react/jsx-one-expression-per-line */

import { RouteComponentProps } from '@reach/router';
import React from 'react';

import './index.css';

const About: React.FC<RouteComponentProps> = (props) => (
  <div className="page">
    <h1>About me</h1>
    <section>
      <p>
        I’ve got about 6 years experience of web development, and have worked
        professionally as a frontend developer for 3 years, mainly as a
        consultant. I’m also academically trained and got work experience within
        UX and interaction design. I believe this has given me as a developer
        solid understanding of concepts such as usability, information
        architecture, prototyping and accessibility.
      </p>
      <p>Here are a few of the skills I posses:</p>
      <span className="skill">JavaScript</span>
      <span className="skill">TypeScript</span>
      <span className="skill">React</span>
      <span className="skill">HTML</span>
      <span className="skill">CSS</span>
      <span className="skill">CSS animations</span>
      <span className="skill">FelaJS</span>
      <span className="skill">React context API</span>
      <span className="skill">MobX</span>
      <span className="skill">Immer</span>
      <span className="skill">NodeJs</span>
      <span className="skill">Jest</span>
      <span className="skill">React testing library</span>
      <span className="skill">Cypress</span>
      <span className="skill">Webpack</span>
      <span className="skill">Docker</span>
      <span className="skill">Contentful</span>
      <span className="skill">a11y</span>
      <span className="skill">i18n</span>
      <span className="skill">Gettext</span>
    </section>
  </div>
);

export default About;
