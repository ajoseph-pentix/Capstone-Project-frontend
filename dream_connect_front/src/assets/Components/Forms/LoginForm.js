import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = () => {
    this.props.submit(this.state.data); //call onSubmit function and pass data
  }
};

  render() {
const {data} = this.state;

return (
  <Form onSubmit={this.onSubmit}>
  <Form.Field>
  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Email"
    value={data.email}
    onChange={this.onChange}
    />
  </Form.Field>
  <Form.Field>
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    name="email"
    placeholder="password"
    value={data.password}
    onChange={this.onChange}
    />
  </Form.Field>
    <Button primary>Login</Button>
  </Form>
    );
  };

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired

};
export default LoginForm;
