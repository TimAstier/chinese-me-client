import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { reduxForm } from 'redux-form/immutable';
import { required } from '../../utils/formValidations';
import { Field } from 'redux-form/immutable';
import { ScreenButton } from '../.';

const Input = styled.input`
  width: 100%;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 16px;
  color: #454545;
  padding: 10px;
  border: solid 2px #55b6ff;
  border-radius: 10px;
  border-color: ${props => {
    if (props.error) {
      return '#f65859';
    }
    return props.active ? '#55b6ff' : 'black';
  }};
  ::placeholder {
    color: #cdd6db;
  }
  -webkit-appearance: none;
  outline: none;
`;

const InputWrapper = styled.div`
  height: 10%;
`;

const Error = styled.div`
  margin-top: 5px;
  font-family: 'Open Sans';
	font-size: 14px;
	color: #f65859;
`;

const FormErrorWrapper = styled.div`
  height: 30px;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #f65859;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  min-height: 75px;
  align-items: flex-start;
  width: 310px;
  justify-content: space-between;
`;

class GiftCodeForm extends Component {
  _renderField({
    input,
    type,
    placeholder,
    meta: { touched, error, warning, active }
  }) {
    return (
      <InputWrapper>
        <Input
          {...input}
          type={type}
          placeholder={active ? undefined : placeholder}
          error={touched && error}
          active={active}
          onBlur={() => {}}
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
      </InputWrapper>
    );
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <Form
        onSubmit={ handleSubmit }
        autoComplete="off"
      >
        <Field
          component={this._renderField}
          name="giftCode"
          label="Gift code"
          type="text"
          validate={[required]}
          placeholder="Enter your Gift Code"
        />
        <FormErrorWrapper>
          {error}
        </FormErrorWrapper>
        <ScreenButton
          height={42}
          width={100}
          fontSize={16}
          type="submit"
          text="Activate"
          primary
        />
      </Form>
    );
  }
}

GiftCodeForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  error: propTypes.string
};

GiftCodeForm = reduxForm({
  form: 'activateGiftCode' // a unique name for the form
})(GiftCodeForm);

export default GiftCodeForm;
