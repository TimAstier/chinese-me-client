import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { FeedbackModal, Navbar, MapModal, SEO } from '../.';
import { actions as sagaActions } from '../../sagas/actions';
import s from '../../rootSelectors';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: ChineseFont;
    src: url('https://d1vi6gdem0f6wt.cloudfront.net/fonts/FZKTJW.TTF') format('opentype');
  }
  @font-face {
    font-family: YingBi;
    src: url('https://d1vi6gdem0f6wt.cloudfront.net/fonts/FZYBKSJW.ttf') format('opentype');
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media print {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  margin-top: 55px;
  background-color: #B2BABF;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media print {
    height: auto;
    margin-top: 0;
  }
`;

class App extends Component {
  componentWillMount() {
    const { initApp, isAuthenticated } = this.props;
    return initApp(isAuthenticated);
  }

  render() {
    return (
      <Wrapper div="appWrapper">
        <SEO />
        <FeedbackModal />
        <MapModal />
        <Navbar id="navbar"/>
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: propTypes.object,
  initApp: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: s.auth.getIsAuthenticated(state)
});

export default connect(
  mapStateToProps,
  {
    initApp: sagaActions.initApp
  }
)(App);
