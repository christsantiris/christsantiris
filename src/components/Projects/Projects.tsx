import React from 'react';
import './Projects.scss';
import Chat from '../../images/chat.png'
import Batman from '../../images/batmanlogo.png'
import Blocks from '../../images/Blocks.png'

const Projects: React.FC = () => (
  <div>
  <div className='skills section-header' id='projects'>
    <h1>My Projects</h1>
    <div className='me'>
      <p>My work is proprietary, but you can see some applications that I have built for fun here: <a href='https://github.com/christsantiris' target='_blank' rel="noopener noreferrer">GitHub.</a></p>
      <p>Click the images below to try my Batman Vs The Riddler Game, Socket.io Chat App, and Block Breaker game live on the web! More cool apps coming soon!</p>
    </div>
    <div className='gitHub'>
      <div className='pic-container'>
        <div className='appsdiv'>
          <div className='hovereffect'>
            <img src={Batman} alt='Batman Vs The Riddler' width='323' height='200' />
            <div className='overlay'>
              <a href='http://batmanvsriddler.surge.sh/' target='_blank' rel="noopener noreferrer">
                <h2>Batman Vs The Riddler</h2>
                <p><i className='fa fa-superpowers' aria-hidden='true' /></p>
              </a>
            </div>
          </div>
          <a href='https://github.com/christsantiris/BatmanRiddler'>Click here to see the code on Github</a>
        </div>
        <div className='appsdiv'>
          <div className='hovereffect'>
            <img src={Chat} alt='Socket IO Chat App' width='323' height='200' />
            <div className='overlay'>
              <a href='http://warm-ridge-28132.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                <h2>Socket.io Chat</h2>
                <p><i className='fa fa-wifi' aria-hidden='true' /></p>
              </a>
            </div>
          </div>
          <a href='https://github.com/christsantiris/socket-chat'>Click here to see the code on Github</a>
        </div>
        <div className='appsdiv'>
          <div className='hovereffect'>
            <img src={Blocks} alt='Block Breaker Game' width='323' height='200' />
            <div className='overlay'>
              <a href='http://block-breaker.surge.sh/' target='_blank' rel="noopener noreferrer">
                <h2>Block Breaker</h2>
                <p><i className='fa fa-th' aria-hidden='true' /></p>
              </a>
            </div>
          </div>
          <a href='https://github.com/christsantiris/brickbreaker'>Click here to see the code on Github</a>
        </div>
      </div>
      <div className='gitcommits'>
        <a href='https://github.com/christsantiris' target='_blank' rel="noopener noreferrer">
          <img className='gitHubChart' src='http://ghchart.rshah.org/08324F/christsantiris' alt="Caleb's Github chart" />
        </a>
      </div>
    </div>
  </div>
</div>
);

export default Projects;
