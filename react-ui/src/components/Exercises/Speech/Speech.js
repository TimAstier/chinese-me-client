import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Wrapper, QuestionWrapper } from '../Shared';
import { PlayAudioButton } from '../../../containers';
import containsChinese from '../../../utils/containsChinese';
import insertVariables from '../../../utils/insertVariables';

const TextWrapper = styled.div`
  font-family: ${props => props.isChinese ? 'Kai' : 'Calibri'};
  font-size: 40px;
  margin-top: 30px;
`;

const AudioWrapper = styled.div`
  margin-top: 60px;
  height: 80px;
`;

class Speech extends Component {
  _textToSpeechQuestion() {
    return this.props.guidelineText ? insertVariables(this.props.guidelineText, this.props.userSettings) : 'Read aloud:';
  }

  _audioToSpeechQuestion() {
    return this.props.guidelineText ? insertVariables(this.props.guidelineText, this.props.userSettings) : 'Listen and repeat:';
  }

  _renderTextToSpeech() {
    const questionItem = insertVariables(this.props.questionText, this.props.userSettings);
    return (
      <Wrapper>
        <QuestionWrapper fontSize={24} fixedHeight>
          {
            this.props.status === 'question'
            ? this._textToSpeechQuestion()
              : ''
          }
        </QuestionWrapper>
        <TextWrapper isChinese={this.props.questionText && containsChinese(questionItem)}>
          {questionItem}
        </TextWrapper>
        <QuestionWrapper fontSize={24} fixedHeight>
          {
            this.props.status === 'question'
              ? 'Then compare with the model:'
              : 'Repeat until you feel comfortable.'
          }
        </QuestionWrapper>
        <AudioWrapper>
          <PlayAudioButton
            keyPress
            big
            text={this.props.audioUrl.includes('[') ? insertVariables(this.props.audioUrl, this.props.userSettings) : undefined}
          />
        </AudioWrapper>
      </Wrapper>
    );
  }

  _renderAudioToSpeech() {
    return (
      <Wrapper>
        <QuestionWrapper fontSize={24} fixedHeight>
          {
            this.props.status === 'question'
            ? this._audioToSpeechQuestion()
              : 'Repeat until you feel comfortable:'
          }
        </QuestionWrapper>
        <AudioWrapper>
          <PlayAudioButton
            keyPress
            big
            text={this.props.audioUrl.includes('[') ? insertVariables(this.props.audioUrl, this.props.userSettings) : undefined}
          />
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
  guidelineText: propTypes.string,
  questionText: propTypes.string,
  type: propTypes.oneOf(['textToSpeech', 'audioToSpeech']).isRequired,
  userSettings: propTypes.object,
  audioUrl: propTypes.string.isRequired
};

export default Speech;
