import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import images from '../../images';

const bouncy = keyframes`
  0% { transform: scale(1.0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

class Avatar extends Component {

  render() {
    const { image, animated } = this.props;
    const Wrapper = styled.div`
      width: 80px;
      height: 80px;
      animation: ${animated ? bouncy : 'none'} 1500ms ease-in-out 0ms infinite;
      margin-right: 5px;
      margin-left: 5px;
    `;

    return (
      <Wrapper>
        <Image src={images[image]} shape="circular" bordered />
      </Wrapper>
    );
  }
}

Avatar.propTypes = {
  image: propTypes.string.isRequired,
  animated: propTypes.bool
};

export default Avatar;
