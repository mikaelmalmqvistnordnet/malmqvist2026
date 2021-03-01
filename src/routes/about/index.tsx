/* eslint-disable react/jsx-one-expression-per-line */

import { RouteComponentProps } from '@reach/router';
import React from 'react';

import './index.css';

const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'CSS animations',
  'FelaJS',
  'React context API',
  'MobX',
  'Immer',
  'NodeJs',
  'Jest',
  'React testing library',
  'Cypress',
  'Webpack',
  'Docker',
  'Contentful',
  'Netlify',
  'a11y',
  'i18n',
  'Gettext',
];

const About: React.FC<RouteComponentProps> = (props) => (
  <div className="page">
    <h1>About me</h1>
    <section>
      <p>
        I’ve got about 6 years experience of web development, and have worked
        professionally as a frontend engineer for roughly 3 years, mainly as a
        consultant. I’m also academically trained and got work experience within
        UX and interaction design. I believe this has given me as a developer
        solid understanding of concepts such as usability, information
        architecture, prototyping and accessibility.
      </p>
      <p>
        While frontend with JavaScript is my strong suit, I’ve got good
        understanding of backend development using NodeJs and also know my way
        around languages such as Java, C# and Python.
      </p>
      <p>
        Besides technical know-how, I’ve also got experience in agile coaching
        and project management.
      </p>
      <p>Here are a few skills I posses:</p>
      {skills.map((s) => (
        <span className="skill">{s}</span>
      ))}
    </section>
  </div>
);

export default About;
