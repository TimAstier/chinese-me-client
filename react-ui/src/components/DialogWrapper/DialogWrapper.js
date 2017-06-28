import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, Statement } from '../.';
import { capitalizeFirstLetter } from '../../utils/strings';

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

class DialogWrapper extends Component {

  renderAvatars() {
    const { personalities, animatedAvatar } = this.props;
    const avatars = [];
    personalities.forEach(p => {
      return avatars.push(
        <Avatar
          key={p.id}
          image={p.name + capitalizeFirstLetter(p.mood)}
          animated={p.id === animatedAvatar}
        />
      );
    });
    return avatars;
  }

  render() {
    const { sentences, currentSentence } = this.props;
    return (
      <Wrapper>
        <PersonalitiesWrapper>
          {this.renderAvatars()}
        </PersonalitiesWrapper>
        <StatementWrapper>
          <Statement sentences={sentences} currentSentence={currentSentence} />
        </StatementWrapper>
      </Wrapper>
    );
  }
}

DialogWrapper.propTypes = {
  sentences: propTypes.array.isRequired,
  personalities: propTypes.array.isRequired,
  currentSentence: propTypes.number.isRequired,
  animatedAvatar: propTypes.number.isRequired
};

export default DialogWrapper;
