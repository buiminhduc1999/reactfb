import React from 'react';
import { Flex, intro1, intro2, intro3, img2, namebox, selectday, selectmonth, form3, button2, form4, form5 } from '../public/Login';
import _ from 'lodash';
import { formValid } from "./utils/Validate";
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
        } else {
            console.error("ERROR");
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        console.log("Name: ", name)
        console.log("Value: ", value)


        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "Ít nhất 3 kí tự" : "";
                break;

            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "Ít nhất 3 kí tự" : "";
                break;

            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Email không hợp lệ";
                break;

            case "password":
                formErrors.password =
                    value.length < 6 ? "Phải có ít 6 kí tự" : "";
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    render() {
        const { formErrors } = this.state;
        return (
            <>
                <Flex>
                    <div className="container-2">
                        <div className="container-box"></div>
                        <div className="container-box">
                            <div style={intro1} class=""><strong>Facebook giúp bạn kết nối và chia sẻ với mọi</strong><br />
                                <strong>người trong cuộc sống của bạn.</strong></div>
                            <div style={img2} class="" ><img src="world.png" /></div>
                        </div>
                        <div class="container-box">
                            <div style={intro2} class=""><strong>Đăng ký</strong></div>
                            <div style={intro3} class="">Nhanh chóng và dễ dàng.</div>
                            <div style={form3} class="">
                                <input
                                    placeholder="Họ"
                                    type="text"
                                    style={namebox}
                                    name="firstname"
                                />
                                <input
                                    placeholder="Tên"
                                    type="text"
                                    style={namebox}
                                    name="lastname"
                                />
                                <input
                                    placeholder="Số điện thoại hoặc email"
                                    type="text"
                                    style={namebox}
                                    name="email"
                                />
                                <input
                                    placeholder="Mật khẩu mới"
                                    style={namebox}
                                    type="password"
                                    name="password"
                                />
                                <br /><br />
                            Ngày sinh<br />
                                <select name="day" style={selectday}>
                                    {_.range(1, 30 + 1).map(value => <option key={value} value={value}>{value}</option>)}
                                </select>
                                <select name="month" style={selectmonth}>
                                    {_.range(1, 12 + 1).map(value => <option key={value} value={value}>{'Thang ' + value}</option>)}
                                </select>
                                <select name="year" style={selectday}>
                                    {_.range(1970, 2020 + 1).map(value => <option key={value} value={value}>{value}</option>)}
                                </select>
                                <br />
                                <br />
                    Giới tính<br />
                                <input type="radio" name="sex" value="male" /> Nam  <input type="radio" name="sex" value="female" /> Nữ <input type="radio" name="sex" value="female" /> Tùy Chỉnh<br /><br />
                                <div style={form4}>
                                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                                </div>
                                <div>
                                    <input type="submit" style={button2} value="Đăng Ký" />
                                </div>
                                <div style={form5} >
                                    Tạo Trang dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </>
        );
    }
}


export default Section;