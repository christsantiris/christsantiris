import React from 'react';
import './About.scss';

const About: React.FC = () => (
  <div className='about section-header' id='about'>
    <h1>About Me</h1>
    <div className='me'>
      <label>"By Day":</label>
      <p>I am an IT manager and developer. I work with several teams creating web applications in Nodejs, Dotnet Core, or Python.</p>
      <p> I can write code in JavaScript, Typescript, Python, and C# using libraries like Node.js, Flask, Django, Angular or React.</p>
      <p>Currently, I'm passively keeping an eye out for a role in an exciting area of technology like Machine Learning, Blockchain, or Cybersecurity.</p>
      <label>"By Night":</label>
      <p> I love to kayak, paddle board, or fish and be out on the water. I code for fun and I also love board games and card games.</p>
      <p>Check out my social media links at the bottom of the page or email me at <a href="mailto:chris.tsantiris@gmail.com?Subject=Hi%20Chris" target="_top">chris.tsantiris@gmail.com</a></p>
    </div>
  </div>
);

export default About;


