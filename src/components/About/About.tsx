import React from 'react';
import './About.scss';

const About: React.FC = () => (
  <div className='about section-header' id='about'>
    <h1>About Me</h1>
    <div className='me'>
      <p>Hi, I'm Chris, a full stack software engineer from the St Pete/Tampa Bay Area.</p>
      <p> My favorite coding language is probably Typescript, but I enjoy writing code in Python and C# too.</p>
      <p>Currently, I work at PwC where I am a manager and senior developer on several projects.</p>
      <p>I go back and forth between working on the ci cd pipelines and delivering application features.</p>
      <p>Outside of work, I like to be out on the water with my kayak or paddle board, or out riding my bike.</p>
      <p>Check out my social media links at the bottom of the page or email me at <a href="mailto:chris.tsantiris@gmail.com?Subject=Hi%20Chris" target="_top">chris.tsantiris@gmail.com</a></p>
    </div>
  </div>
);

export default About;
