/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { TransparentInput } from '../.';
import { reduxForm } from 'redux-form/immutable';
import { email, required } from '../../utils/formValidations';
import { Provider } from '../../utils/testComponents';

// TransparentInput.propTypes = {
//   name: propTypes.string.isRequired,
//   label: propTypes.string.isRequired,
//   type: propTypes.oneOf(['email', 'text', 'password']).isRequired,
//   validate: propTypes.array
// };

const FormA = reduxForm({
  form: 'test'
})(() =>
  <TransparentInput
    name="password"
    label="Password"
    type="password"
  />
);

const FormB = reduxForm({
  form: 'test'
})(() =>
  <TransparentInput
    name="text"
    label="Text"
    type="text"
  />
);

const FormC = reduxForm({
  form: 'test'
})(() =>
  <TransparentInput
    name="email"
    label="Email"
    type="email"
  />
);

const FormD = reduxForm({
  form: 'validate: required'
})(() =>
  <TransparentInput
    name="text"
    label="Text"
    type="text"
    validate={[required]}
  />
);

const FormE = reduxForm({
  form: 'test'
})(() =>
  <TransparentInput
    name="email"
    label="Email"
    type="email"
    validate={[required, email]}
  />
);

storiesOf('TransparentInput', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('type: password', () => <FormA />)
  .add('type: text', () => <FormB />)
  .add('type: email', () => <FormC />)
  .add('validate: required', () => <FormD />)
  .add('validate: required && email', () => <FormE />);
