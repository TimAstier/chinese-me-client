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
  min-height: 140px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormErrorWrapper = styled.div`
  height: 30px;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #f65859;
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
        <FormErrorWrapper>
          {error}
        </FormErrorWrapper>
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
