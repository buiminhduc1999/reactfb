 <div id="form3" class="content">
                    <div className="username">
                        <div className="container">
                            <input 
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Họ"
                                type="text"
                                id="namebox"
                                name="firstName"
                                onChange={this.handleChange}
                                noValidate
                            />
                            <div id='message1'>
                                {formErrors.firstName.length > 0 && (
                                    <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <div className="container">
                            <div>
                                <input className={formErrors.lastName.length > 0 ? "error" : null}
                                    placeholder="Tên"
                                    type="text" id="namebox"
                                    name="lastName"
                                    onChange={this.handleChange}
                                    noValidate
                                />
                            </div>
                            <div id='message1'>
                                {formErrors.lastName.length > 0 && (
                                    <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <div className="container">
                            <div>
                                <input className={formErrors.email.length > 0 ? "error" : null}
                                    placeholder="Số điện thoại hoặc email"
                                    type="text"
                                    id="mailbox"
                                    name="email"
                                    onChange={this.handleChange}
                                    noValidate
                                />
                            </div>
                            <div id='message1'>
                                {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="password">
                        <div className="container">
                            <div>
                                <input className={formErrors.password.length > 0 ? "error" : null}
                                    placeholder="Mật khẩu mới"
                                    id="mailbox2"
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    noValidate
                                />
                            </div>
                            <div id='message1'>
                                {formErrors.password.length > 0 && (
                                    <div className="errorMessage">{formErrors.password}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <br /><br />
                      Ngày sinh<br />
                    <select name="day" id="selectday">
                        {_.range(1, 30 + 1).map(value => <option key={value} value={value}>{value}</option>)}
                    </select>
                    <select name="month" id="selectmonth">
                        {_.range(1, 12 + 1).map(value => <option key={value} value={value}>{'Thang ' + value}</option>)}
                    </select>
                    <select name="year" id="selectday">
                        {_.range(1970, 2020 + 1).map(value => <option key={value} value={value}>{value}</option>)}
                    </select>
                    <br />
                    <br />
                      Giới tính<br />
                    <input type="radio" name="sex" value="male" /> Nam  <input type="radio" name="sex" value="female" /> Nữ <input type="radio" name="sex" value="female" /> Tùy Chỉnh<br /><br />
                    <div id="form4">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản</a>, <a href="#">Chính sách dữ liệu</a> và <a href="#">Chính sách cookie của chúng tôi</a>. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                      </div>
                    <br /><br />
                    <br />
                    <div id="form5">
                        <a href="#">Tạo Trang</a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                      </div>
                </div>
                <input type="submit" id="button2" value="Đăng Ký" ></input> 