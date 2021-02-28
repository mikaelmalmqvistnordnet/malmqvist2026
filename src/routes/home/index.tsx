/* eslint-disable react/jsx-one-expression-per-line */

import { RouteComponentProps } from '@reach/router';
import React from 'react';

import './index.css';

const Home: React.FC<RouteComponentProps> = (props) => (
  <div className="home">
    <h1>Hi there 👋</h1>
    <p>
      <h2 aria-label="Career bio">👨‍💻</h2>
      <section>
        My name is Mikael and I’m a frontend engineer based in Stockholm,
        Sweden. I currently work as a consultant at{' '}
        <a href="https://www.netlight.com/" target="_blank" rel="noreferrer">
          Netlight Consulting AB
        </a>{' '}
        helping our clients build user-friendly and accessible web applications.
      </section>
    </p>
    <p>
      <h2 aria-label="Education bio">🎓</h2>
      <section>
        I’ve got a bachelor’s in software engineering and a master’s in
        interaction design from Chalmers University of Technology.
      </section>
    </p>
  </div>
);

export default Home;
