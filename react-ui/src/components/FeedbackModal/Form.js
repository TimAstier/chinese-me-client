import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 146px;
  height: 50px;
  border-radius: 57px;
  background-color: #4990e2;
  font-family: 'Open Sans';
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  outline: 0;
  border: 0;
  margin-top: 30px;
`;

const Label = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: #454545;
`;

const Select = styled.select`
  width: 600px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  border: solid 2px #d5d5d5;
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 227px;
  border-radius: 10px;
  background-color: #ffffff;
  border: solid 2px #d5d5d5;
  outline: 0;
  resize: none;
`;

class Form extends Component {

  render() {
    return (
      <form
        onSubmit={ () => { console.log('Message submitted'); } }
        autoComplete="off"
      >
        <FieldsWrapper>
          <Label>Subject</Label>
          <Field name="subject" component={Select}>
            <option />
            <option value="question">I have a question about Chinese language</option>
            <option value="idea">I have a idea for ChineseMe</option>
            <option value="mistake">I think I found a mistake</option>
            <option value="bug">I found a bug</option>
            <option value="other">Other...</option>
          </Field>
          <Label>Message</Label>
          <Field name="message" component={TextArea} />
        </FieldsWrapper>
        <ButtonWrapper>
          <Button type="submit">Send</Button>
        </ButtonWrapper>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired
};

Form = reduxForm({
  form: 'feedback' // a unique name for the form
})(Form);

export default Form;
