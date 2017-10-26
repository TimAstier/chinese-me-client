// Integration based on the following article
// http://krasimirtsonev.com/blog/article/react-third-party-library-integration

import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import hanziWriterConfig from '../../constants/hanziWriterConfig';
import HanziWriter from 'hanzi-writer';

const Wrapper = styled.div`
  margin-top: 20px;
  width: ${`${hanziWriterConfig.width}px`};
  min-height: ${`${hanziWriterConfig.height}px`};
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #dce6eb;
  font-size: 100px;
  font-family: 'STKaitiSC';
	color: #454545;
  display: flex;
`;

class HanziWrapper extends Component {

  /* componentDidMount is the proper lifecycle method for initializing
  ** the writer. That’s because we get it called when React mounts the
  ** target-div in the render method.
  */
  componentDidMount() {
    this.targetDiv = this.refs.targetDiv;
    this.writer = new HanziWriter(this.targetDiv, this.props.char, { // eslint-disable-line
      width: 230,
      height: 230,
      strokeAnimationDuration: 800,
      strokeHighlightDuration: 200,
      delayBetweenStrokes: 300,
      showHintAfterMisses: 1,
      showCharacter: this.props.mode === 'characterPinyin',
      showOutline: this.props.mode === 'stroke'
    });
    if (this.props.mode === 'stroke') {
      this.writer.animateCharacter({
        onComplete: () => this.props.strokeAnimationFinished()
      });
    }
    if (this.props.mode === 'strokeQuiz') {
      this.writer.quiz({
        onComplete: () => this.props.onQuizComplete()
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.char !== nextProps.char) {
      this.writer.setCharacter(nextProps.char);
    }
  }

  // Force a single-render
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <div ref="targetDiv" />
      </Wrapper>
    );
  }
}

HanziWrapper.propTypes = {
  char: propTypes.string.isRequired,
  mode: propTypes.string.isRequired,
  strokeAnimationFinished: propTypes.func.isRequired,
  onQuizComplete: propTypes.func
};

export default HanziWrapper;
