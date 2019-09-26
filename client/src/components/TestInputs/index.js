import React, { Component } from "react";
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Form, Input, Button } from "reactstrap";

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
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return(
      <Form>
        <Input type="text" name="userName" value={this.state.userName}
          onChange={this.handleChange}
        />
        <Input type="text" name="password" value={this.state.password}
          onChange={this.handleChange}
        />
        <Input type="text" name="email" value={this.state.email}
          onChange={this.handleChange}
        />
        <Input type="text" name="firstName" value={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input type="text" name="lastName" value={this.state.lastName}
          onChange={this.handleChange}
        />
        <Button>Sign me up!</Button>
      </Form>
    );
  }
}

export default TestInputs;
//---------------------------------------------------------------------------------
