import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentInput } from '../.';
import { reduxForm } from 'redux-form/immutable';
import { required, email } from '../../utils/formValidations';

const Button = styled.button`
  width: 440px;
  height: 80px;
  background-color: #4990e2;
  font-family: 'Open Sans';
	font-size: 25px;
	text-align: center;
	color: #ffffff;
  margin-top: 20px;
  outline: 0;
  border: 0;
`;

const FieldsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
`;

const FormErrorWrapper = styled.div`
  margin-top: 20px;
  font-family: 'Open Sans';
	font-size: 25px;
	text-align: center;
	color: orangered;
`;

const validate = values => {
  const errors = {};
  if (values.get('password') !== values.get('passwordConfirmation')) {
    errors.passwordConfirmation = 'Passwords must match';
  }
  return errors;
};

class Form extends Component {

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <form
        onSubmit={ handleSubmit }
        autoComplete="off"
      >
        <FieldsWrapper>
          <TransparentInput
            name="email"
            label="Email"
            type="email"
            validate={[required, email]}
          />
          <TransparentInput
            name="password"
            label="Password"
            type="password"
            validate={[required]}
          />
          <TransparentInput
            name="passwordConfirmation"
            label="Password confirmation"
            type="password"
            validate={[required]}
          />
        </FieldsWrapper>
        {error &&
          <FormErrorWrapper>
            {error}
          </FormErrorWrapper>}
        <Button type="submit">Create your ChineseMe account</Button>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  error: propTypes.string
};

Form = reduxForm({
  form: 'signup', // a unique name for the form
  validate // validation function given to redux-form
})(Form);

export default Form;
