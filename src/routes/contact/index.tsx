/* eslint-disable react/jsx-one-expression-per-line */
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC<RouteComponentProps> = (props) => (
  <div className="text-left max-w-3xl pb-1">
    <h1>Contact</h1>
    <section>
      <p>
        The easiest way to get in touch with me is via email, but you can also reach me via
        LinkedIn.
      </p>
    </section>
    <section className="flex flex-col">
      <a
        href="mailto:mikael@malmqvist.it"
        target="_blank"
        rel="noreferrer"
        className="flex items-center focus:underline hover:underline"
      >
        <FaEnvelope className="mr-1" /> mikael@malmqvist.it
      </a>
      <a
        href="https://www.linkedin.com/in/mikael-malmqvist-579b70a9/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center focus:underline hover:underline"
      >
        <FaLinkedin className="mr-1" /> LinkedIn
      </a>
    </section>
  </div>
);

export default Contact;
