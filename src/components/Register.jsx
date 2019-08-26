import React, { Component } from "react";
import "../styles/sign-in.styles.scss.scss";

import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState = {
      email: "",
      password: ""
    };
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I do not have an Account</h2>        
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="Dispaly Name"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Dispaly Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirm password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
