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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarName = styled.div`  
  font-family: 'PingFangSC';
  font-size: 18px;
  font-weight: 500;
  color: #b2babf;
  height: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  animation: ${props => props.isTalking ? bouncy : 'none'} 1200ms linear 0ms infinite;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 50%;
  border: solid 2px #dce6eb;
  box-shadow: ${props => props.chosen ? '0 0 0pt 2pt #55b6ff' : '0 2px 5px 0 rgba(0, 0, 0, 0.08)'};
`;

// Example of extending styles with change of tag.
// See: https://www.styled-components.com/docs/basics#extending-styles

const ImagePlaceholder = Image.withComponent('div').extend`
  background-color: #F2F7FA;
`;

class Avatar extends Component {
  renderImage() {
    const isTalking = this.props.avatar.isTalking;
    const image = this.props.avatar[ this.props.avatar.mood + 'Image' ];
    if (image) {
      return (
        <Image
          src={image}
          isTalking={isTalking}
          chosen={this.props.chosen}
        />
      );
    }
    return (
      <ImagePlaceholder
        isTalking={isTalking}
        chosen={this.props.chosen}
      />
    );
  }

  render() {
    return (
      <Wrapper>
        {this.renderImage()}
        <AvatarName>
          <div>{this.props.avatar.name}</div>
          {this.props.chosen && <div>{'(You)'}</div>}
        </AvatarName>
      </Wrapper>
    );
  }
}

Avatar.propTypes = {
  avatar: propTypes.instanceOf(models.Avatar),
  chosen: propTypes.bool
};

export default Avatar;
