import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FeedbackModal, Navbar, MapModal, QuestionModal } from '../.';
import { actions as sagaActions } from '../../sagas/actions';
import s from '../../rootSelectors';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #B2BABF;
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
        <QuestionModal />
        <Navbar />
        {this.props.initialized && this.props.children}
      </Wrapper>
    );
  }
}

Study.propTypes = {
  children: propTypes.object,
  initApp: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  initialized: s.app.getInitialized(state)
});

export default connect(
  mapStateToProps,
  {
    initApp: sagaActions.initApp
  }
)(Study);
