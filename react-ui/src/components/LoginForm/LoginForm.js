import React, { Component, PropTypes } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = 'This field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        () => {
          this.context.router.push('/study/1/grammar/1');
          this.props.showFlashMessageWithTimeout({
            type: 'success',
            text: 'Welcome back on ChineseMe!'
          }, 5000);
        },
        (err) => {
          this.setState({
            isLoading: false
          });
          this.props.showFlashMessageWithTimeout({
            type: 'error',
            text: err.response.data.errors[0].message
          }, 5000);
        }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Header as="h1" className="center">Login</Header>

        { errors.form &&
          <div className="alert alert-danger">{errors.form}</div> }

        <Form.Field>
          <Form.Input
            label="Username / email"
            value={this.state.identifier}
            onChange={this.onChange}
            type="text"
            name="identifier"
            error={!isEmpty(errors.identifier)}
          />
          { errors.identifier &&
            <p className="error">{errors.identifier}</p>
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

        <Button
          primary
          type="submit"
          disabled={this.state.isLoading || this.state.invalid}
        >
          Login
        </Button>

      </Form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  showFlashMessageWithTimeout: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginForm;
