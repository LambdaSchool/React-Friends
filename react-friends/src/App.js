import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList.js';

class App extends Component {
  state = { people: [] };

  componentDidMount() { this.setState({ people }); }

  render() {
    return (
      <div className="App">
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;