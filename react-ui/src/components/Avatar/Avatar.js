import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
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

    const Wrapper = styled.div`
      width: 80px;
      height: 80px;
      animation: ${isTalking ? bouncy : 'none'} 1200ms linear 0ms infinite;
      margin-right: 5px;
      margin-left: 5px;
    `;

    return (
      <Wrapper>
        <Image
          src={image}
          shape="circular"
          bordered
        />
      </Wrapper>
    );
  }
}

Avatar.propTypes = {
  avatar: propTypes.instanceOf(models.Avatar)
};

export default Avatar;
