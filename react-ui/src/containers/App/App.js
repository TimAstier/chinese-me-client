import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { actions as sagaActions } from '../../sagas/actions';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 750px;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: propTypes.object,
  location: propTypes.object.isRequired,
  router: propTypes.object.isRequired,
  initApp: propTypes.func.isRequired
};

export default connect(
  null,
  {
    initApp: sagaActions.initApp
  }
)(App);
