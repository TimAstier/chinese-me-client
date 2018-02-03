import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Wrapper, QuestionWrapper } from '../Shared';
import { PlayAudioButton } from '../../../containers';
import containsChinese from '../../../utils/containsChinese';

const TextWrapper = styled.div`
  font-family: ${props => props.isChinese ? 'Kai' : 'Calibri'};
  font-size: 40px;
  margin-top: 30px;
`;

const AudioWrapper = styled.div`
  margin-top: 30px;
`;

class Speech extends Component {
  _renderTextToSpeech() {
    return (
      <Wrapper>
        <QuestionWrapper fontSize={24}>
          {
            this.props.status === 'question'
              ? 'Read the sentence aloud:'
              : ''
          }
        </QuestionWrapper>
        <TextWrapper isChinese={containsChinese(this.props.text)}>
          {this.props.text}
        </TextWrapper>
        <QuestionWrapper fontSize={24}>
          {
            this.props.status === 'question'
              ? 'Then compare with the model:'
              : 'Repeat until you feel comfortable:'
          }
        </QuestionWrapper>
        <AudioWrapper>
          <PlayAudioButton keyPress big />
        </AudioWrapper>
      </Wrapper>
    );
  }

  _renderAudioToSpeech() {
    return (
      <Wrapper>
        <QuestionWrapper fontSize={24}>
          {
            this.props.status === 'question'
              ? 'Listen and repeat:'
              : 'Repeat until you feel comfortable:'
          }
        </QuestionWrapper>
        <AudioWrapper>
          <PlayAudioButton keyPress big />
        </AudioWrapper>
      </Wrapper>
    );
  }

  render() {
    if (this.props.type === 'textToSpeech') {
      return this._renderTextToSpeech();
    }
    if (this.props.type === 'audioToSpeech') {
      return this._renderAudioToSpeech();
    }
    return null;
  }
}

Speech.propTypes = {
  status: propTypes.string.isRequired,
  text: propTypes.string,
  type: propTypes.oneOf(['textToSpeech', 'audioToSpeech']).isRequired
};

export default Speech;
