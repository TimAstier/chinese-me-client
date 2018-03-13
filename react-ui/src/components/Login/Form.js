import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentInput } from '../.';
import { reduxForm } from 'redux-form/immutable';
import { required, email } from '../../utils/formValidations';
import { Button } from '../Shared/Onboarding';


const FieldsWrapper = styled.div`
  min-height: 140px;
  margin-top: 8%;
  margin-bottom: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormErrorWrapper = styled.div`
  height: 30px;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #f65859;
  text-align: center;
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
