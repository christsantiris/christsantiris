import React, { Component } from 'react';
import './Navbar.scss';
import ScrollAnim from 'rc-scroll-anim'

type NavbarState = {
  visible?: boolean,
}

class Navbar extends Component<{}, NavbarState>  {
constructor(props:any) {
  super(props)
  this.state = {
    visible: false
  };
}

toggle () {
  this.setState({ visible: !this.state.visible })
}

render () {
  const ScrollAnimLink = ScrollAnim.Link

  return (
    <div className='navBar'>
      <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
        <i className='fa fa-bars' aria-hidden='true' />
      </button>
      <nav className={this.state.visible ? '' : 'hidden'}>
        <ul className='homeNavUl'>
          <li>
            <button className='menu' onClick={() => this.toggle()}>
              <i className='fa fa-times' aria-hidden='true' />
            </button>
          </li>
          <li>
            <ScrollAnimLink to='top' onClick={() => this.toggle()}>Home
              <i className='fa fa-chevron-up' aria-hidden='true' />
            </ScrollAnimLink>
          </li>
          <li>
            <ScrollAnimLink to='about' onClick={() => this.toggle()}>About Me
              <i className='fa fa-cogs' aria-hidden='true' />
            </ScrollAnimLink>
          </li>
          <li>
            <ScrollAnimLink to='projects' onClick={() => this.toggle()}>My Projects
              <i className='fa fa-wrench' aria-hidden='true' />
            </ScrollAnimLink>
          </li>
          <li>
            <ScrollAnimLink to='skills' onClick={() => this.toggle()}>Skills
              <i className='fa fa-bookmark' aria-hidden='true' />
            </ScrollAnimLink>
          </li>
          <li>
            <ScrollAnimLink to='socialmedia' onClick={() => this.toggle()}>Social Media
              <i className='fa fa-users' aria-hidden='true' />
            </ScrollAnimLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
}

export default Navbar;
