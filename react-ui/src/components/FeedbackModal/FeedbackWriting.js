import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  flex: 2 0 0;
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  flex: 8 0 0;
`;

class FeedbackWriting extends Component {

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <p>Tell us about your question or comment</p>
        </TitleWrapper>
        <FormWrapper>
          <Form
            onSubmit={this.props.onSubmit}
            initialValues={ { email: this.props.email } }
          />
        </FormWrapper>
      </Wrapper>
    );
  }
}

FeedbackWriting.propTypes = {
  onSubmit: propTypes.func.isRequired,
  email: propTypes.string
};

export default FeedbackWriting;
