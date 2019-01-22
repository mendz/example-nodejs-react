import React from 'react';
import { TokenConsumer } from '../providers/TokenProviders';

const LoginButton = () => {

  const getToken = async () => {
    const token = await (await fetch('/login', {method: 'POST'})).text();
    return token;
  }

  return (
    <TokenConsumer>
      {
        ({ setToken }) => {
          return <button onClick={async () => setToken(await getToken())}>Fetch Token</button>
        }
      }
    </TokenConsumer>
  )
}

export default LoginButton;