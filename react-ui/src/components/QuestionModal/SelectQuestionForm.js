import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { reduxForm } from 'redux-form/immutable';
import { ScreenButton } from '../.';
import Select from './Select';
import { required } from '../../utils/formValidations';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class SelectQuestionForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={ handleSubmit }
        autoComplete="off"
      >
        <Wrapper>
          <Select
            name="value"
            choices={this.props.choices}
            validate={[required]}
          />
          <ScreenButton
            width={300}
            text={'Submit'}
            primary
          />
        </Wrapper>
      </form>
    );
  }
}

SelectQuestionForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  choices: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string
    })
  ).isRequired
};

SelectQuestionForm = reduxForm({
  form: 'selectQuestion' // a unique name for the form
})(SelectQuestionForm);

export default SelectQuestionForm;
