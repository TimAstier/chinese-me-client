import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Progressbar, ElementsNav } from '../../containers';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopMiddleUpWrapper = styled.div`
  height: 43px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopMiddleDownWrapper = styled.div`
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

class TopMiddleWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.elementType !== undefined;
  }

  render() {
    switch (this.props.elementType) {
      case 'dialog':
      case 'practice':
      case 'question':
        return (
          <Wrapper>
            <TopMiddleUpWrapper>
              <Progressbar />
            </TopMiddleUpWrapper>
            <TopMiddleDownWrapper>
              <ElementsNav />
            </TopMiddleDownWrapper>
          </Wrapper>
        );
      case 'exam':
        return (
          <Wrapper>
            <TopMiddleUpWrapper>
              <ElementsNav />
            </TopMiddleUpWrapper>
            <TopMiddleDownWrapper />
          </Wrapper>
        );
      default:
        return null;
    }
  }
}

TopMiddleWrapper.propTypes = {
  elementType: propTypes.string
};

export default TopMiddleWrapper;
