import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { actions as sagaActions } from '../../sagas/actions';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: ChineseFont;
    src: url('https://s3.eu-west-2.amazonaws.com/chineseme/fonts/FZKTJW.TTF') format('opentype');
  }
  @font-face {
    font-family: YingBi;
    src: url('https://s3.eu-west-2.amazonaws.com/chineseme/fonts/FZYBKSJW.ttf') format('opentype');
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
