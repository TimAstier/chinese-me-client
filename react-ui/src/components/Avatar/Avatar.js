import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import * as models from '../../models';

const bouncy = keyframes`
  0% { transform: scale(1.0); }
  25% { transform: scale(1.1); }
  75% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

class Avatar extends Component {
  // BUG: Images have different sizes
  render() {
    const isTalking = this.props.avatar.isTalking;
    const image = this.props.avatar[ this.props.avatar.mood + 'Image' ];

    const Image = styled.img`
      width: 80px;
      height: 80px;
      animation: ${isTalking ? bouncy : 'none'} 1200ms linear 0ms infinite;
      margin-right: 5px;
      margin-left: 5px;
      border-radius: 50%;
      box-shadow: ${this.props.chosen ? '0 0 0pt 2pt blue' : 'none'}
    `;

    return (
        <Image src={image} />
    );
  }
}

Avatar.propTypes = {
  avatar: propTypes.instanceOf(models.Avatar),
  chosen: propTypes.bool
};

export default Avatar;
