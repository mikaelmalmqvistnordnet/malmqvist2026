/* eslint-disable react/jsx-one-expression-per-line */

import { RouteComponentProps } from '@reach/router';
import React from 'react';

import './index.css';

const Home: React.FC<RouteComponentProps> = (props) => (
  <div className="home">
    <h1>Hi there 👋</h1>
    <section>
      <h2 aria-label="Career bio">👨‍💻</h2>
      <p>
        My name is Mikael and I’m a frontend engineer based in Stockholm,
        Sweden. I currently work as a consultant at{' '}
        <a href="https://www.netlight.com/" target="_blank" rel="noreferrer">
          Netlight Consulting AB
        </a>{' '}
        helping clients build user-friendly and accessible web applications.
      </p>
    </section>
    <section>
      <h2 aria-label="Education bio">🎓</h2>
      <p>
        I’ve got a bachelor’s in software engineering and a master’s in
        interaction design from Chalmers University of Technology.
      </p>
    </section>
  </div>
);

export default Home;
