import React, { memo } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import "../Login.css";
import { formValid } from "../utils/Validate";
import LoginInput from "./LoginInput";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const SLink = styled(Link)`
    font-size: 14px;
    margin-top: 3px;
`

const SubmitButton = styled.button`
    height: 32px;
    margin-top: 24px;
    background-color: #4267b2;
    color: #fff;
    font-weight: bold;
    border-color: #29487d;
    cursor: pointer;
    &:hover{
        background-color: #365899;
        border-color: #29487d;
    }
`

const ForgotPassword = memo(function() {
    return <SLink>Quên mật khẩu</SLink>
})

const passRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,10}$/
);

class LoginForm extends React.PureComponent {
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    const { name, value } = e.target;

    let formErrors = this.state.formErrors;

    console.log("Name: ", name);
    console.log("Value: ", value);

    switch (name) {
      case "password":
        formErrors.password = passRegex.test(value) ? "" : "Email không hợp lệ";
        // value.length < 6 ? "Phải có ít 6 kí tự" : "";
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  submitForm = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "fis" && password === "Fis123456") {
      localStorage.setItem("token", "asdfghjkllkjhgfdsa");
      this.setState({
        loggedIn: true,
      });
    }

    if (formValid(this.state)) {
      console.log(`
            Password: ${this.state.password}
      `);
    } else {
      console.error("ERROR");
    }
  };
  render() {
    const { formErrors } = this.state;
   
    return (
      <Wrapper>
        <LoginInput label="Email hoặc số điện thoại"/>
        <LoginInput label="Mật khẩu" FooterElement={<ForgotPassword />} />
        <SubmitButton>Đăng nhập</SubmitButton>
      </Wrapper>
    );
  }
}

export default LoginForm;
