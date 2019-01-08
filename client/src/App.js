import React, { Component } from 'react';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit} className="App-form">
          <p>
            <strong>Name:</strong>{` "${this.state.formSiteName}"`}
            <br />
            <strong>URL:</strong>{` "${this.state.formSiteURL}"`}
            <br />
            <strong>Started:</strong>{` ${this.state.formSiteStarted ? '🌟' : '❌'}`}
          </p>
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
        <table className="all-sites">
          <thead>
            <tr>
              <th>Name</th>
              <th>Site</th>
              <th>Stared</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sites.map(site => (
              <tr key={site._id}>
                <td>{site.name}</td>
                <td>{site.url}</td>
                <td>{site.stared ? '🌟' : '❌'}</td>
                <td>{site.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
