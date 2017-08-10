import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form/immutable';

const Input = styled.input`
  width: 440px;
  font-family: 'Open Sans';
	font-size: 25px;
	color: #454545;
  outline: 0;
  border-width: 0 0 2px 0;
  border-color: #979797;
  background: transparent;
`;

const Wrapper = styled.div`
  height: 100px;
`;

const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 14px;
  color: #4990e2;
  display: block;
`;

const Error = styled.div`
  margin-top: 5px;
  color: orangered;
`;

class TransparentInput extends Component {
  // This render method allows the inner input element to get the props
  // that are otherwise on the styled.input element
  // https://github.com/erikras/redux-form/issues/1094
  renderField({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) {
    return (
      <Wrapper>
        <Label>{label}</Label>
        <Input {...input} type={type} placeholder={placeholder}/>
        {touched &&
          ((error &&
            <Error>
              {error}
            </Error>) ||
            (warning &&
              <Error>
                {warning}
              </Error>))}
      </Wrapper>
    );
  }

  render() {
    return (
      <Field
        label={this.props.label}
        placeholder={this.props.label}
        name={this.props.name}
        component={this.renderField}
        type={this.props.type}
        autocomplete="off"
        validate={this.props.validate}
      />
    );
  }
}

TransparentInput.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.oneOf(['email', 'text', 'password']).isRequired,
  validate: propTypes.array
};

export default TransparentInput;
