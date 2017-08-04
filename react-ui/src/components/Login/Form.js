import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentInput } from '../.';
import { reduxForm } from 'redux-form/immutable';

const Button = styled.button`
  width: 440px;
  height: 80px;
  background-color: #4990e2;
  font-family: 'Open Sans';
	font-size: 25px;
	text-align: center;
	color: #ffffff;
  margin-top: 40px;
  outline: 0;
  border: 0;
`;

const FieldsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 180px;
`;

class Form extends Component {

  render() {
    return (
      <form
        onSubmit={ this.props.handleSubmit }
        autoComplete="off"
      >
        <FieldsWrapper>
          <TransparentInput
            name="email"
            label="Email"
            type="email"
          />
          <TransparentInput
            name="password"
            label="Password"
            type="password"
          />
        </FieldsWrapper>
        <Button type="submit">Log in</Button>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired
};

Form = reduxForm({
  form: 'login' // a unique name for the form
})(Form);

export default Form;
