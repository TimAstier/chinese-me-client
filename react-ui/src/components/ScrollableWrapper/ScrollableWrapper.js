import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Footer } from '../.';
import { ScrollContainer } from 'react-router-scroll';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F2F7FA;
  overflow-y: auto;
`;

class ScrollableWrapper extends Component {

  _shouldUpdateScroll = (prevRouterProps, routerProps) => {
    // Only move to scrollPosition in book
    if (routerProps.routes[2].path === 'season/:seasonNumber/episode/:episodeNumber') {
      return [0, this.props.scrollPosition];
    }
    return false;
  };

  render() {
    return (
      <ScrollContainer
        scrollKey="scrollableWrapper"
        shouldUpdateScroll={this._shouldUpdateScroll}
      >
        <Wrapper id="scrollableWrapper">
          {this.props.children}
          <Footer />
        </Wrapper>
      </ScrollContainer>
    );
  }
}

ScrollableWrapper.propTypes = {
  children: propTypes.node,
  scrollPosition: propTypes.number
};

export default ScrollableWrapper;
