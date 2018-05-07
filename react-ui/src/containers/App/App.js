import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
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

class App extends Component {
  componentWillMount() {
    const { initApp, isAuthenticated } = this.props;
    return initApp(isAuthenticated);
  }

  render() {
    return (
      <Wrapper div="appWrapper">
        {this.props.children}
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
