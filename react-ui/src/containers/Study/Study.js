import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FeedbackModal, Navbar, MapModal } from '../.';
import { actions as sagaActions } from '../../sagas/actions';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Study extends Component {
  componentWillMount() {
    return this.props.initApp();
  }

  render() {
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

Study.propTypes = {
  children: propTypes.object,
  initApp: propTypes.func.isRequired
};

export default connect(
  null,
  {
    initApp: sagaActions.initApp
  }
)(Study);
