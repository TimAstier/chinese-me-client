import React, { Component } from 'react';
import propTypes from 'prop-types';
import Raven from 'raven-js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px red;
  background-color: light-grey;
  padding: 20px;
  h2 {
    color: red;
    
  }
`;

// From react official docs:
// https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
      errorMessage: error.message
    });
    // You can also log the error to an error reporting service
    Raven.captureException(error, { extra: info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Wrapper>
          <h2>Something went wrong.</h2>
          <p><b>{this.state.errorMessage}</b></p>
          <p>Our development team has been notified.</p>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node
};

export default ErrorBoundary;
