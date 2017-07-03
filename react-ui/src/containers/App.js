import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class App extends Component {

  render() {
    const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      background-color: orangered;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: propTypes.object,
  location: propTypes.object.isRequired
};

export default App;
