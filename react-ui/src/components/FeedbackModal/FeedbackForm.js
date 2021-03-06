import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';

const FieldsWrapper = styled.div`
  display: flex;
  
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 250px;
  height: 48px;
  border-radius: 57px;
  background-color: #55b6ff;
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
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  border: solid 2px #cdd6db;
  font-family: 'Open Sans';
	font-size: 17px;
	line-height: 1.0;
	color: #454545;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  border: solid 2px #cdd6db;
  font-family: 'Open Sans';
  font-size: 17px;
  line-height: 1.0;
  color: #454545;
  padding-left: 10px;
  padding-right: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 227px;
  @media (max-width: 500px) {
    height: 130px;
  }
  border-radius: 10px;
  background-color: #ffffff;
  border: solid 2px #cdd6db;
  outline: 0;
  resize: none;
  font-family: 'Open Sans';
	font-size: 17px;
	line-height: 1.5;
	color: #454545;
  padding-left: 10px;
  padding-right: 10px;
`;

const Form = styled.form`
  width: 90%;
`;

class FeedbackForm extends Component {
  // This render method allows the inner input element to get the props
  // that are otherwise on the styled.input element
  // https://github.com/erikras/redux-form/issues/1094
  renderInput(props) {
    return (
      <Input
        {...props.input}
        required={props.required}
      />
    );
  }

  renderSelect(props) {
    return <Select {...props.input} children={props.children} />;
  }

  renderTextArea(props) {
    return <TextArea {...props.input} required={props.required} />;
  }

  // BUG: The form is re-rendered (and lose value and focus) when the route
  // changes from an episode saga
  // Maybe can be solved by pushing to the context
  render() {
    // console.log('re-render')
    return (
      <Form
        onSubmit={ this.props.handleSubmit }
        autoComplete="off"
      >
        <FieldsWrapper>
          <Label>Your email:</Label>
          <Field
            name="email"
            defaultValue={'test'}
            component={this.renderInput}
            required
          />
          <Label>Subject:</Label>
          <Field name="subject" component={this.renderSelect}>
            <option />
            <option value="question">I have a question about Chinese language</option>
            <option value="name">I have a question about my Chinese name</option>
            <option value="idea">I have an idea for ChineseMe</option>
            <option value="mistake">I think I found a mistake</option>
            <option value="bug">I found a bug</option>
            <option value="idk">I just want to write to you and don't know what subject to choose</option>
            <option value="other">Other...</option>
          </Field>
          <Label>Message:</Label>
          <Field name="message" component={this.renderTextArea} required/>
        </FieldsWrapper>
        <ButtonWrapper>
          <Button type="submit">Send</Button>
        </ButtonWrapper>
      </Form>
    );
  }
}

FeedbackForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
};

FeedbackForm = reduxForm({
  form: 'feedback', // a unique name for the form
})(FeedbackForm);

export default FeedbackForm;
