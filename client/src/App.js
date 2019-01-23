import React, { Component } from 'react';
import TokenProvider from './providers/TokenProviders';
import LoginButton from './components/LoginButton';
import TokenDisplay from './components/TokenDisplay';
import InputsDisplay from './components/InputsDisplay';
import SitesTable from './components/SitesTable';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    sites: [],
    formSiteName: '',
    formSiteURL: '',
    formSiteStarted: false
  }

  componentDidMount() {
    this.setSites();
  }

  callApi = async () => {
    const response = await fetch('/api/sites');
    const sites = await response.json();
    if (response.status !== 200) throw Error(sites.message);
    return sites;
  };

  setSites = () => {
    this.callApi()
      .then(sites => this.setState({ sites }))
      .catch(err => console.log(err));
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/sites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.formSiteName,
        url: this.state.formSiteURL,
        stared: this.state.formSiteStarted
      }),
    });
    const siteSaved = await response.text();
    if (response.ok) {
      console.log(siteSaved);
      this.setSites();
    } else {
      console.log('API call failed:::\n', siteSaved);
    }

  };

  render() {
    return (
      <TokenProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <InputsDisplay
            name={this.state.formSiteName}
            url={this.state.formSiteURL}
            isStar={this.state.formSiteStarted} />

          <form onSubmit={this.handleSubmit} className="App-form">
            <div className="inputs">
              <input
                type="text"
                title="Name"
                placeholder="Enter Site Name..."
                value={this.state.formSiteName}
                onChange={e => this.setState({ formSiteName: e.target.value })}
              />
              <input
                type="text"
                title="URL"
                placeholder="Enter Site URL..."
                value={this.state.formSiteURL}
                onChange={e => this.setState({ formSiteURL: e.target.value })}
              />
              <input
                type="checkbox"
                title="Stared"
                checked={this.state.formSiteStarted}
                onChange={e => this.setState({ formSiteStarted: e.target.checked })}
              />

            </div>
            <button type="submit">Submit</button>
          </form>

          <hr />

          <SitesTable sites={this.state.sites} />

          <hr />

          <div>
            <LoginButton />
            <TokenDisplay />
          </div>
        </div>
      </TokenProvider>
    );
  }
}

export default App;
