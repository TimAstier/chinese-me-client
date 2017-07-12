import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar } from '../.';
import { Statement } from '../../containers';
import * as models from '../../models';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
`;

const PersonalitiesWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatementWrapper = styled.div`
  flex: 3 0 0;
  display: flex;
  justify-content: center;
`;

class Dialog extends Component {

  renderAvatars() {
    const avatarComponents = [];
    this.props.avatars.forEach(avatar => {
      return avatarComponents.push(
        <Avatar
          key={avatar.id}
          avatar={avatar}
          chosen={avatar.id === this.props.chosenAvatarId ? true : undefined}
        />
      );
    });
    return avatarComponents;
  }

  render() {
    const { sentences, currentSentenceIndex } = this.props;
    return (
      <Wrapper>
        <PersonalitiesWrapper>
          {this.renderAvatars()}
        </PersonalitiesWrapper>
        <StatementWrapper>
          <Statement
            sentences={sentences}
            currentSentenceIndex={currentSentenceIndex}
          />
        </StatementWrapper>
      </Wrapper>
    );
  }
}

Dialog.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  avatars: propTypes.arrayOf(propTypes.instanceOf(models.Avatar)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  chosenAvatarId: propTypes.number.isRequired
};

export default Dialog;
