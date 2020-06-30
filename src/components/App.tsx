import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type AppState = {
  name: string,
  avatar_url: string,
  bio: string,
  location: string,
  email: string
}

class App extends Component<{}, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: '',
      avatar_url: '',
      bio: '',
      location: '',
      email: 'chris.tsantiris@gmail.com'
    };
  }

  componentDidMount () {
    const gitHubURL = 'https://api.github.com/users/christsantiris'
    window.fetch(gitHubURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        location: data.location,
      })
    })
  }
  render() {
    return <div>
             <Header name={this.state.name} avatar_url={this.state.avatar_url} bio={this.state.bio} location={this.state.location} email={this.state.email}/>
             <Footer />
          </div>

  }
}

export default App;
