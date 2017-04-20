import React, { Component, PropTypes } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = 'This field is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

// Use class components for top-components to get hot reloading working
class SignupForm extends Component {
  // Defining the state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      country: '',
      errors: {},
      isLoading: false,
      invalid: false
    };

    // Binding the right context to the onChange and onSubmit methods
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val)
        .then(res => {
          const errors = this.state.errors;
          let invalid;
          if (!isEmpty(res.data.user)) {
            errors[field] = 'There is user with such ' + field;
            invalid = true;
          } else {
            errors[field] = '';
            invalid = false;
          }
          this.setState({ errors, invalid });
        });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    // Condition for client side validation
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          // success from server
          this.props.showFlashMessageWithTimeout({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/');
        })
          // error from server
        .catch(error => {
          this.setState({ errors: error.response.data, isLoading: false });
        });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Header as="h1" className="center">Create your account</Header>

        <Form.Field>
          <Form.Input
            label="Username"
            value={this.state.username}
            onBlur={this.checkUserExists}
            onChange={this.onChange}
            type="text"
            name="username"
            error={!isEmpty(errors.username)}
          />
          { errors.username &&
            <p className="error">{errors.username}</p>
          }
        </Form.Field>

        <Form.Field>
          <Form.Input
            label="Email"
            value={this.state.email}
            onBlur={this.checkUserExists}
            onChange={this.onChange}
            type="text"
            name="email"
            error={!isEmpty(errors.email)}
          />
          { errors.email &&
            <p className="error">{errors.email}</p>
          }
        </Form.Field>

        <Form.Field>
          <Form.Input
            label="Password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            error={!isEmpty(errors.password)}
          />
          { errors.password &&
            <p className="error">{errors.password}</p>
          }
        </Form.Field>

        <Form.Field>
          <Form.Input
            label="Password Confirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            error={!isEmpty(errors.passwordConfirmation)}
          />
          { errors.passwordConfirmation &&
            <p className="error">{errors.passwordConfirmation}</p>
          }
        </Form.Field>

        <Form.Field>
          <Form.Input
            label="Country"
            value={this.state.country}
            onChange={this.onChange}
            type="text"
            name="country"
            error={!isEmpty(errors.country)}
          />
          { errors.country &&
            <p className="error">{errors.country}</p>
          }
        </Form.Field>

        <Button
          primary
          type="submit"
          disabled={this.state.isLoading || this.state.invalid}
        >
          Signup
        </Button>

      </Form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  showFlashMessageWithTimeout: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SignupForm;
