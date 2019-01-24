import React from 'react';
import { TokenContext } from '../providers/TokenProviders';

class LoginButton extends React.Component {
  static contextType = TokenContext;

  getToken = async () => {
    const token = await (await fetch('/login', {method: 'POST'})).text();
    return token;
  }

  render() {
    const { setToken } = this.context;
    return <button onClick={async () => setToken(await this.getToken())}>Fetch Token</button>
  }
}

export default LoginButton;