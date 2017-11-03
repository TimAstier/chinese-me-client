import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  font-family: 'Open Sans';
  font-size: 16px;
  color: #454545;
  outline: none;
  text-align-last: center;
  text-align: center;
  margin-bottom: 20px;
`;

class Select extends Component {

  renderOptions(choices) {
    return choices.map((choice, i) => {
      return (
        <option value={ choice.value } key={ i }>
          { choice.label }
        </option>
      );
    });
  }

  renderField({ input, renderOptions, choices }) {
    return (
      <StyledSelect {...input} onBlur="">
        <option value="" />
        {renderOptions(choices)}
      </StyledSelect>
    );
  }

  render() {
    return (
      <Field
        name={this.props.name}
        component={this.renderField}
        validate={this.props.validate}
        renderOptions={this.renderOptions}
        choices={this.props.choices}
      />
    );
  }
}

Select.propTypes = {
  name: propTypes.string.isRequired,
  choices: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string
    })
  ).isRequired,
  validate: propTypes.array
};

export default Select;
