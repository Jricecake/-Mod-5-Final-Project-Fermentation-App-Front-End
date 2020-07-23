import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from 'react-redux'
import {postUser} from '../redux/user/userActions'

class Signup extends Component {
  state = {
    error: false,
    validated: false,
    fields: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  };

  handleChange = (event) => {
    console.log(event.target);
    const newFields = {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    };
    this.setState({ fields: newFields });
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.postNewUser({user: this.state.fields})
  };

  render() {
    return (
     
        <Col className='justify-content-center'>
          <Form.Label>Don't have an account?</Form.Label>


          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => this.handleChange(event)}
                value={this.state.fields.username}
              />
              <Form.Control.Feedback type="invalid">
                You must enter a username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={(event) => this.handleChange(event)}
                value={this.state.fields.first_name}
              />
              <Form.Control.Feedback type="invalid">
                You must enter a first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="last_name"
                placeholder="Last name"
                onChange={(event) => this.handleChange(event)}
                value={this.state.fields.last_name}
              />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              You must enter a last name.
            </Form.Control.Feedback>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={(event) => this.handleChange(event)}
                value={this.state.fields.email}
              />
              <Form.Control.Feedback type="invalid">
                You must enter an email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => this.handleChange(event)}
                value={this.state.fields.password}
              />
              <Form.Control.Feedback type="invalid">
                You must enter a password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
                onChange={(event) => this.handleChange(event)}
                value={this.state.fields.password_confirmation}
              />
              <Form.Control.Feedback type="invalid">
                You must confirm your password.
              </Form.Control.Feedback>
              {this.state.error ? (
                <Form.Text> {this.state.error} </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Button variant="secondary" type="submit" block>
                Create account
              </Button>
            </Form.Group>
          </Form>
        </Col>
      
    );
  }
}


const mapDispatchToProps = dispatch => ({
  postNewUser: userInfo => dispatch(postUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup)