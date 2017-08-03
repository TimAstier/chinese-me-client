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
`;

const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 14px;
  color: #4990e2;
  display: block;
`;

class TransparentInput extends Component {
  // This render method allows the inner input element to get the props
  // that are otherwise on the styled.input element
  // https://github.com/erikras/redux-form/issues/1094
  renderInput(props) {
    return <Input {...props.input} />;
  }

  render() {
    return (
      <Wrapper>
        <Label>{this.props.label}</Label>
        <Field
          name={this.props.name}
          component={this.renderInput}
          type="text"
          placeholder={this.props.label}
          autocomplete="off"
        />
      </Wrapper>
    );
  }
}

TransparentInput.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired
};

export default TransparentInput;
