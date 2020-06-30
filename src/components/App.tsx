import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

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
    return <div>
             <p>Hi {this.state.name} from App</p>
             <Header name={this.state.name}/>
          </div>

  }
}

export default App;
