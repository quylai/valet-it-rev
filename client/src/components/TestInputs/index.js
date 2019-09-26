import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
import axios from 'axios';

class TestInputs extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  // prevent overReact on input changes
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  loginSubmit = event => {
		event.preventDefault();

		this.setState({
      "userName": event.currentTarget.userName,
      "password": event.currentTarget.password,
      "email": event.currentTarget.email,
      "firstName": event.currentTarget.firstName,
      "lastName": event.currentTarget.lastName
		});

		axios.post('/api/testUserSignup', {
			'userName': this.state.userName,
      'password': this.state.password,
      'email': this.state.email,
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
		}).then((response) => {
			console.log(response.data);  //db
		});
	}

  render() {
    return(
      <Form>
        <Input type="text" name="userName" value={this.state.userName}
          onChange={this.handleChange} placeholder="userName"
        />
        <Input type="text" name="password" value={this.state.password}
          onChange={this.handleChange} placeholder="password"
        />
        <Input type="text" name="email" value={this.state.email}
          onChange={this.handleChange} placeholder="email"
        />
        <Input type="text" name="firstName" value={this.state.firstName}
          onChange={this.handleChange} placeholder="firstName"
        />
        <Input type="text" name="lastName" value={this.state.lastName}
          onChange={this.handleChange} placeholder="lastName"
        />
        <Button type="submit" onClick={this.loginSubmit}>Sign me up!</Button>
      </Form>
    );
  }
}

export default TestInputs;
//---------------------------------------------------------------------------------
