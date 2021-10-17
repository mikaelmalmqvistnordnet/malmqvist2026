/* eslint-disable react/jsx-one-expression-per-line */

import { RouteComponentProps } from '@reach/router';
import React from 'react';

const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'FelaJS',
  'Emotion',
  'Tailwind CSS',
  'React context API',
  'Redux',
  'Redux-Saga',
  'MobX',
  'Immer',
  'NodeJs',
  'Jest',
  'React testing library',
  'Enzyme',
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
  <div className="text-left max-w-3xl pb-1 ">
    <h1>About me</h1>
    <section>
      <p>
        I’ve got about 6 years experience of web development, and have worked professionally as a
        frontend engineer for roughly 3.5 years, mainly as a consultant. I’m also academically
        trained and got work experience within UX and interaction design. I believe this has given
        me as a developer solid understanding of concepts such as usability, information
        architecture, prototyping and accessibility.
      </p>
      <p>
        While frontend with JavaScript is my strong suit, I’ve got good understanding of backend
        development using NodeJs and also know my way around languages such as Java, C# and Python.
      </p>
      <p>
        Besides technical know-how, I’ve also got experience in agile coaching and project
        management.
      </p>
      <p className="mt-3">Here are a few skills I posses:</p>
      {skills.map((s) => (
        <span
          className="inline-block bg-gray-200 bg-opacity-20 py-1 px-2 m-1 text-sm rounded-3xl"
          key={s}
        >
          {s}
        </span>
      ))}
    </section>
  </div>
);

export default About;
