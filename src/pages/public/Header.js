import React from 'react';
import { formValid } from "./utils/Validate";
import { Redirect } from 'react-router-dom'
import { Flex, headerbox, submit1 } from '../public/Login';

const passRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,10}$/
);
class HeaderLogin extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            loggedIn,
            formErrors: {
                password: ""
            }
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        console.log("Name: ", name)
        console.log("Value: ", value)

        switch (name) {
            case "password":
                formErrors.password =
                    passRegex.test(value) ? "" : "Password không hợp lệ";
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        if (username === "fis" && password === "Fis123456") {
            localStorage.setItem("token", "asdfghjkllkjhgfdsa")
            this.setState({
                loggedIn: true
            })
        }

        if (formValid(this.state)) {
            console.log(`
            Password: ${this.state.password}
      `);
        } else {
            console.error("ERROR");
        }
    }
    render() {
        const { formErrors } = this.state;
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <>
                <Flex>
                    <div className="container-1">
                        <div className="container-1-box"></div>
                        <div id="img1" className="container-1-box">
                            <img src="facebook.png" />
                        </div>
                        <form onSubmit={this.submitForm}>
                            <table>
                                <tr>
                                    <td>
                                        Email hoặc điện thoại
                                </td>
                                    <td>
                                        Password
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            style={headerbox}
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className={formErrors.password.length > 0 ? "error" : null}
                                            style={headerbox}
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        <br />
                                    </td>
                                    <td>
                                        <input style={submit1} type="submit" value="Đăng nhập" onSubmit={this.submitForm} />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td fontSize='10px'>Quên tài khoản?</td>
                                    <td>{formErrors.password.length > 0 && (
                                        <>{formErrors.password}</>
                                    )}</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </Flex>
            </>
        );
    }
}
export default HeaderLogin;