import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { FeedbackModal, Navbar } from '../.';

class App extends Component {

  render() {
    const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
    return (
      <Wrapper>
        <FeedbackModal />
        <Navbar router={this.props.router} />
        {this.props.children}
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: propTypes.object,
  location: propTypes.object.isRequired,
  router: propTypes.object.isRequired
};

export default App;
