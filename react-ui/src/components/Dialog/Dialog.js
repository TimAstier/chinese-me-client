import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar } from '../.';
import { Statement } from '../../containers';

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
    const { personalities } = this.props;
    const avatars = [];
    personalities.forEach(p => {
      return avatars.push(
        <Avatar
          key={p.id}
          image={p[ p.mood + 'Image' ]}
          animated={p.isTalking}
        />
      );
    });
    return avatars;
  }

  render() {
    const { sentences, currentSentenceIndex } = this.props;
    return (
      <Wrapper>
        <PersonalitiesWrapper>
          {this.renderAvatars()}
        </PersonalitiesWrapper>
        <StatementWrapper>
          <Statement sentences={sentences} currentSentenceIndex={currentSentenceIndex} />
        </StatementWrapper>
      </Wrapper>
    );
  }
}

Dialog.propTypes = {
  sentences: propTypes.array.isRequired,
  personalities: propTypes.array.isRequired,
  currentSentenceIndex: propTypes.number.isRequired
};

export default Dialog;
