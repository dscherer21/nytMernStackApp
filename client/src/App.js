import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <h1>New York Times Article Reader</h1>
        </header>

        <main>

          {/* Search Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>

          {/* Results Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>

          {/* Saved Articles Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>

        </main>

        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
