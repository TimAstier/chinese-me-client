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
  height: 240px;
`;

const FormErrorWrapper = styled.div`
  margin-top: 20px;
  font-family: 'Open Sans';
	font-size: 25px;
	text-align: center;
	color: orangered;
`;

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
        </FieldsWrapper>
        {error &&
          <FormErrorWrapper>
            {error}
          </FormErrorWrapper>}
        <Button type="submit">Log in</Button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  error: propTypes.string
};

Form = reduxForm({
  form: 'login' // a unique name for the form
})(Form);

export default Form;
