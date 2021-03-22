import React from 'react';
import './About.scss';

const About: React.FC = () => (
  <div className='about section-header' id='about'>
    <h1>About Me</h1>
    <div className='me'>
      <label>"By Day":</label>
      <p>I am a Software Engineer at a start-up in the public safety space. The stack is Golang and React with a bit of Python.</p>
      <p>At previous jobs I have worked in Node.js, Dotnet Core, Flask, and Angular using JavaScript, Typescript, Python, and C#. </p>
      <p>You could say that I am a polyglot developer. I love learning new languages, libraries and frameworks.</p>
      <p>Blockchain, AI and Cybersecurity are the most interesting areas of technology for me at the moment. Working in any of those areas? Reach out!</p>
      <label>"By Night":</label>
      <p>I love to kayak, paddle board, or fish and be out on the water.</p>
      <p>Recently I started contributing to some open source projects as well.</p>
      <p>Check out my social media links at the bottom of the page or email me at <a href="mailto:chris.tsantiris@gmail.com?Subject=Hi%20Chris" target="_top">chris.tsantiris@gmail.com</a></p>
    </div>
  </div>
);

export default About;


