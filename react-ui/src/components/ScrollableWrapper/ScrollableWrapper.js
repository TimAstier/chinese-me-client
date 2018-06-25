import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Footer } from '../.';
import { ScrollContainer } from 'react-router-scroll';
const Scroll = require('react-scroll');
const scroll = Scroll.scroller;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F2F7FA;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  @media print {
    height: auto;
  }
  @media (orientation: landscape) and (max-height: 400px){
    zoom: 0.8; 
    -moz-transform: scale(0.8); 
    -moz-transform-origin: 0 0;
  }
`;

class ScrollableWrapper extends Component {
  componentDidMount() {
    const id = this._scrollId();
    if (id) {
      scroll.scrollTo(id, {
        containerId: 'scrollableWrapper',
        duration: 1500,
        delay: 300,
        smooth: true,
        offset: -10, // Scrolls to element + 50 pixels down the page
      });
    }
  }

  _shouldUpdateScroll = (prevRouterProps, routerProps) => {
    // Only move to scrollPosition in book
    if (routerProps.routes[3] && routerProps.routes[3].path === 'season/:seasonNumber/episode/:episodeNumber') {
      // Do not scroll to saved position if the URL has a hash
      if (!this._scrollId()) {
        return [0, this.props.scrollPosition];
      }
    }
    return false;
  };

  _scrollId = () => {
    const { hash } = window.location;
    return hash.replace('#', '');
  }

  render() {
    return (
      <ScrollContainer
        id="scrollableWrapper"
        scrollKey="scrollableWrapper"
        shouldUpdateScroll={ this._shouldUpdateScroll }
      >
        <Wrapper>
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
