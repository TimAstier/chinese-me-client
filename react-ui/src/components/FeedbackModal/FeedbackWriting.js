import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import messageIcon from '../../images/messageIcon.svg';

const Wrapper = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-top: 35px;
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
        <IconWrapper>
          <img src={messageIcon} width="90px" alt=""/>
        </IconWrapper>
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
