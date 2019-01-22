import React from 'react';
import { TokenConsumer } from '../providers/TokenProviders';

const TokenDisplay = () => {
  return (
    <TokenConsumer>
      {
        ({token, count}) => {
          return (
            <React.Fragment>
              <h1>{`This is the token: "${token}"`}</h1>
              <h1>{`Button pressed count: "${count}"`}</h1>
            </React.Fragment>
          )
        }
      }
    </TokenConsumer>
  )
}

export default TokenDisplay;