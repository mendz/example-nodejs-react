import React from 'react';

const TokenContext = React.createContext();

export const TokenConsumer = TokenContext.Consumer;

class TokenProvider extends React.Component {
  state = {
    token: '',
    count: 0
  }

  setToken = newToken => {
    const currentCount = this.state.count;
    this.setState({
      token: newToken,
      count: currentCount + 1
    })
  }

  render() {
    return (
      <TokenContext.Provider value={{
        token: this.state.token,
        count: this.state.count,
        setToken: newToken => this.setToken(newToken)
      }}>
        {this.props.children}
      </TokenContext.Provider>
    )
  }
}

export default TokenProvider;