import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FeedbackModal, Navbar, MapModal } from '../.';
import { actions as sagaActions } from '../../sagas/actions';
import s from '../../rootSelectors';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  margin-top: 55px;
  background-color: #B2BABF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Study extends Component {
  componentWillMount() {
    const { initApp, isAuthenticated } = this.props;
    return initApp(isAuthenticated);
  }

  render() {
    return (
      <Wrapper>
        <FeedbackModal />
        <MapModal />
        <Navbar id="navbar"/>
        <ContentWrapper>
          {this.props.initialized && this.props.children}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

Study.propTypes = {
  children: propTypes.object,
  initApp: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  initialized: s.app.getInitialized(state),
  isAuthenticated: s.auth.getIsAuthenticated(state)
});

export default connect(
  mapStateToProps,
  {
    initApp: sagaActions.initApp
  }
)(Study);
