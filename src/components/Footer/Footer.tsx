import React from 'react';
import './Footer.scss';

const date = new Date().getFullYear()

const Footer: React.FC = () => (
  <div className='footer' id='socialmedia'>
    <footer>
      <h2>CONNECT WITH ME ON Twitter, LinkedIn, or Github.</h2>
      <ul className='socialmedia'>
        <li>
          <a href='https://twitter.com/ChrisTsantiris' target='_blank' rel="noopener noreferrer">
            <i className='fa fa-twitter' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/christsantiris' target='_blank' rel="noopener noreferrer">
            <i className='fa fa-linkedin' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='https://github.com/christsantiris' target='_blank' rel="noopener noreferrer">
            <i className='fa fa-github' aria-hidden='true' />
          </a>
        </li>
    </ul>
    <h5>Copyright &copy; {date} Chris Tsantiris.</h5>
    </footer>
  </div>
);

export default Footer;
