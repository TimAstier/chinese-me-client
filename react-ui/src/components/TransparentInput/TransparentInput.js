import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form/immutable';

const Wrapper = styled.div`
  height: 100px;
`;

const Input = styled.input`
  width: 100%;
  font-family: 'Open Sans';
  font-size: 22px;
  color: #454545;
  outline: 0;
  border-width: 0 0 2px 0;
  border-color: ${props => {
    if (props.error) {
      return '#f65859';
    }
    return props.active ? '#55b6ff' : '#b2babf';
  }};
  background: transparent;
  ::placeholder {
    color: #cdd6db;
  }
`;

const Label = styled.label`
  height: 16px;
  font-family: 'Open Sans';
  font-size: 16px;
  color: ${props => props.active ? '#55b6ff' : '#b2babf'};
  display: block;
`;

const Error = styled.div`
  margin-top: 5px;
  font-family: 'Open Sans';
	font-size: 14px;
	color: #f65859;
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
    meta: { touched, error, warning, active }
  }) {
    return (
      <Wrapper>
        <Label active={active}>
          {input.value ? label : null}
        </Label>
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          error={touched && error}
          active={active}
        />
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
