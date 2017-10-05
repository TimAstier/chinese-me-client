import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../models';
import styled from 'styled-components';
import { Avatar } from '../.';
import { ScreenButton } from '../../containers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const LabelWrapper = styled.div`
  padding-top: 10px;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #454545;
`;

const AvatarsWrapper = styled.div`
  padding-top: 38px;
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

class ChoseRole extends Component {

  renderAvatars() {
    const avatarComponents = [];
    this.props.avatars.forEach((avatar, i) => {
      return avatarComponents.push(
        <Avatar
          key={i}
          avatar={avatar}
          chosen={avatar.id === this.props.chosenAvatarId ? true : undefined}
          diameter={120}
          onClick={()=>this.props.setChosenAvatarId(avatar.id)}
        />
      );
    });
    return avatarComponents;
  }

  renderChoiceLabel() {
    return (
      <LabelWrapper>
        In this part, you will play the role of one of the speakers.
        <br/>
        Which role would you like to play?
      </LabelWrapper>
    );
  }

  renderNoChoiceLabel() {
    return (
      <LabelWrapper>
        In this part, you will play the role of {this.props.avatars[0].name}.
        <br/>
        If you don't feel ready, you can practice more in 'Explore' mode.
      </LabelWrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.props.avatars.length === 1 ?
          this.renderNoChoiceLabel()
          : this.renderChoiceLabel()
        }
        <AvatarsWrapper>
          {this.renderAvatars()}
        </AvatarsWrapper>
        <ButtonWrapper>
          <ScreenButton
            text="Start"
            primary
            onClick={this.props.startRoleplay}
            disabled={!this.props.chosenAvatarId ? true : undefined}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

ChoseRole.propTypes = {
  avatars: propTypes.arrayOf(propTypes.instanceOf(models.Avatar)).isRequired,
  chosenAvatarId: propTypes.number.isRequired,
  setChosenAvatarId: propTypes.func.isRequired,
  startRoleplay: propTypes.func.isRequired
};

export default ChoseRole;
