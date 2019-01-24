import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import TokenProvider from './providers/TokenProviders';
import MongoDBExample from './containers/MongoDBExample';
import ContextApiExample from './containers/ContextApiExample';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <TokenProvider>
        <BrowserRouter>
          <div className="App">

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>

            <nav className="App-nav">
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/MongoDBExample">
                <button>MongoDB Example</button>
              </Link>
              <Link to="/ContextApiExample">
                <button>Context Api Example</button>
              </Link>
            </nav>

            <hr />

            <main className="App-main-content">
              <Route path="/MongoDBExample" component={MongoDBExample} />
              <Route path="/ContextApiExample" component={ContextApiExample} />
            </main>

          </div>
        </BrowserRouter>
      </TokenProvider>
    );
  }
}

export default App;
