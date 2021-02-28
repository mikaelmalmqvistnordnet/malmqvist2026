/* eslint-disable react/jsx-one-expression-per-line */
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import './index.css';

const Contact: React.FC<RouteComponentProps> = (props) => (
  <div className="page">
    <h1>Contact</h1>
    <section>
      <p>
        The easiest way to get in touch with me is via email, but you can also
        reach me via LinkedIn.
      </p>
    </section>
    <section className="contact-info">
      <a href="mailto:mikael@malmqvist.it" target="_blank" rel="noreferrer">
        <FaEnvelope /> mikael@malmqvist.it
      </a>
      <a
        href="https://www.linkedin.com/in/mikael-malmqvist-579b70a9/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin /> LinkedIn
      </a>
    </section>
  </div>
);

export default Contact;
