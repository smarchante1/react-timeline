import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';


class App extends Component {
  render() {
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Ada Feed</h1>
        </header>
        <main className="App-main">
          <Timeline events= { timelineData.events } />
        </main>
      </div>
    );
  };
};

export default App;
