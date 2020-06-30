import React, { Component } from 'react';
import './App.css';

type AppState = {
  name: string,
}

class App extends Component<{}, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount () {
    const GitHubURL = 'https://api.github.com/users/christsantiris'
    window.fetch(GitHubURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
      })
    })
  }
  render() {
    return <p>Hi {this.state.name}</p>
  }
}

export default App;
