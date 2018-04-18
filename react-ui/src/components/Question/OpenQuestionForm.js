import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import { required, validDate } from '../../utils/formValidations';
import { ScreenButton } from '../.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: Dry with input from CharacterPinyin
const Input = styled.input`
  width: 160px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(85, 182, 255, 0.6);
  border: solid 2px #55b6ff;
  font-family: 'Open Sans';
  font-size: 16px;
  text-align: center;
  color: #454545;
  -webkit-appearance: none;
  outline: none;
  margin-bottom: 20px;
`;

class OpenQuestionForm extends Component {
  // This render method allows the inner input element to get the props
  // that are otherwise on the styled.input element
  // https://github.com/erikras/redux-form/issues/1094
  // TODO: Display validation errors
  // TODO: Server-side validations (especially for dates)
  renderField({
    input,
    type,
    meta: { touched, error, active }
  }) {
    return (
      <Input
        {...input}
        autoFocus
        type={type}
        error={touched && error}
        active={active}
        onBlur={() => {}}
      />
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={ handleSubmit }
        autoComplete="off"
      >
        <Wrapper>
          <Field
            name="value"
            component={ this.renderField }
            type={this.props.date ? 'date' : 'text'}
            autocomplete="off"
            validate={ this.props.date ? [ required, validDate ] : [ required ] }
          />
          <ScreenButton
            text={'Submit'}
            primary
          />
        </Wrapper>
      </form>
    );
  }
}

OpenQuestionForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  date: propTypes.bool
};

OpenQuestionForm = reduxForm({
  form: 'openQuestion' // a unique name for the form
})(OpenQuestionForm);

export default OpenQuestionForm;
