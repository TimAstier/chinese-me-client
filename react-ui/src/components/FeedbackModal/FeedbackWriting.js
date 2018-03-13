import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import FeedbackForm from './FeedbackForm';

const Wrapper = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #454545;
  margin-top: 35px;
`;

const ExplanationWrapper = styled.div`
  margin-top: 10px;
  width: 90%;
  text-align: center;
`;

class FeedbackWriting extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <p>Send a message to ChineseMe</p>
        </TitleWrapper>
        <ExplanationWrapper>
          <p><i>We love to hear from our students. Do not hesitate to contact us any time you have a question or a comment about your learning experience! You can also get in touch with us on Twitter, <a href="https://twitter.com/ChineseMeHQ" target="_blank" rel="noopener noreferrer">@ChineseMeHQ</a>.</i></p>
        </ExplanationWrapper>
        <FeedbackForm
          onSubmit={this.props.onSubmit}
          initialValues={ { email: this.props.email } }
        />
      </Wrapper>
    );
  }
}

FeedbackWriting.propTypes = {
  onSubmit: propTypes.func.isRequired,
  email: propTypes.string
};

export default FeedbackWriting;
