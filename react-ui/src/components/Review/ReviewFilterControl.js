import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton } from '../.';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: flex-end;
  }
  width: 340px;
`;

class ReviewFilterControl extends Component {
  render() {
    return (
      <Wrapper>
        <ScreenButton
          text="Recommended"
          height={30}
          width={160}
          fontSize={15}
          primary={this.props.recommended}
          onClick={() => this.props.setRecommended(true)}
        />
        <ScreenButton
          text="All"
          height={30}
          width={160}
          fontSize={15}
          primary={!this.props.recommended}
          onClick={() => this.props.setRecommended(false)}
        />
      </Wrapper>
    );
  }
}

ReviewFilterControl.propTypes = {
  recommended: propTypes.bool.isRequired,
  setRecommended: propTypes.func.isRequired
};

export default ReviewFilterControl;
