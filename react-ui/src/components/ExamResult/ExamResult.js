import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { CircleProgressbar, Star } from '../.';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 35px;
  font-weight: 600;
  color: #454545;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CommentWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 20px;
  line-height: 1.5;
  color: #7f8c94;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ProgressbarWrapper = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StarsWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Stars = styled.div`
  height: 32;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class ExamResult extends Component {

  renderHeaderText() {
    if (this.props.score < 7) {
      return 'Nice try. Practice makes perfect!';
    }
    return 'You successfully passed this test!';
  }

  renderCommentText() {
    if (this.props.score < 7) {
      return (
        <p>
          You need a minimum score of 7/10 to pass this test.
          <br/>
          You can redo this test any time whenever you feel ready.
        </p>
      );
    }
    return (
      <p>
        You can redo this test any time to try to get a better score.
        <br/>
        <br/>
      </p>
    );
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          {this.renderHeaderText()}
        </HeaderWrapper>
        <CommentWrapper>
          {this.renderCommentText()}
        </CommentWrapper>
        <ProgressbarWrapper>
          <CircleProgressbar
            score={this.props.score}
            scoreMax={this.props.scoreMax}
          />
        </ProgressbarWrapper>
        <StarsWrapper>
          <Stars>
            <Star filled={this.props.score >= 7} big />
            <Star filled={this.props.score >= 8} big />
            <Star filled={this.props.score >= 9} big />
          </Stars>
        </StarsWrapper>
      </Wrapper>
    );
  }
}

ExamResult.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

export default ExamResult;
