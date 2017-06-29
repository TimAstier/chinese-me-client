import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class App extends Component {

  render() {
    const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      background-color: blue;
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
  children: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default App;
