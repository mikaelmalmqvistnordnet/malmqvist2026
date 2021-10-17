/* eslint-disable react/jsx-one-expression-per-line */

import { RouteComponentProps } from '@reach/router';
import React from 'react';

const Home: React.FC<RouteComponentProps> = (props) => (
  <>
    <div className="text-left max-w-3xl pb-1">
      <h1>Hi there 👋</h1>
      <section>
        <p>
          My name is Mikael and I’m a frontend engineer based in Stockholm, Sweden. I currently work
          as a consultant at{' '}
          <a
            href="https://www.netlight.com/"
            target="_blank"
            rel="noreferrer"
            className="focus:underline hover:underline"
          >
            Netlight Consulting AB
          </a>{' '}
          helping clients build user-friendly and accessible web applications.
        </p>
        <p>
          I’ve got a bachelor’s in software engineering and a master’s in interaction design from
          Chalmers University of Technology.
        </p>
      </section>
    </div>
  </>
);

export default Home;
