import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { FeedbackModal, Navbar, MapModal } from '../.';
import { actions as sagaActions } from '../../sagas/actions';

class App extends Component {
  componentWillMount() {
    return this.props.initApp();
  }

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
        <MapModal />
        <Navbar />
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
