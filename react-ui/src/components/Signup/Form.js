import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentInput } from '../.';
import { reduxForm } from 'redux-form/immutable';
import { required, email } from '../../utils/formValidations';

const Button = styled.button`
  width: 350px;
  height: 60px;
  border-radius: 10px;
  background-color: #55b6ff;
  box-shadow: 0 5px 18px 0 rgba(85, 182, 255, 0.5);
  font-family: 'Open Sans';
	font-size: 20px;
	text-align: center;
	color: #ffffff;
  outline: 0;
  border: 0;
  :hover {
    background-color: #5fb9fc;
    box-shadow: 0 5px 30px 0 rgba(85, 182, 255, 0.8);
  }
`;

const FieldsWrapper = styled.div`
  min-height: 245px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FormErrorWrapper = styled.div`
  margin-top: 20px;
  font-family: 'Open Sans';
	font-size: 14px;
	text-align: center;
	color: #f65859;
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
        <Button type="submit">Sign Up</Button>
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
