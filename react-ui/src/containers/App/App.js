import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { actions } from '../../sagas/actions';

class App extends Component {
  componentWillMount() {
    return this.props.init();
  }

  render() {
    const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      background-color: pink;
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
  location: propTypes.object.isRequired,
  init: propTypes.func.isRequired
};

export default connect(
  null,
  {
    init: actions.init
  }
)(App);
