import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentInput } from '../.';
import { reduxForm } from 'redux-form/immutable';
import { required, email } from '../../utils/formValidations';
import { Button } from '../Shared/Onboarding';

const FieldsWrapper = styled.div`
  min-height: 245px;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FormErrorWrapper = styled.div`
  margin-top: 2%;
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
