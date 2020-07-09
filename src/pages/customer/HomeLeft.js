
import styled, { withTheme } from 'styled-components';
import React, { useState, Component } from 'react';
class HomeLeft extends Component {
    constructor() {
        super()
        this.state = {
            showMe: false,
            showShortcuts: false
        }
    }
    operation() {
        this.setState({
            showMe: !this.state.showMe
        })
    }
    operation1() {
        this.setState({
            showShortcuts: !this.state.showShortcuts
        })
    }
    render() {
        return (
            <div>
                <Wrapper>
                    <div class="container-2-box">
                        <ButtonHome icon={'cat.png'} nameButton='Đức' />
                        <ButtonHome icon={'itemfriend.png'} nameButton='Bạn bè' />
                        <ButtonHome icon={'itemmess.png'} nameButton='Messager' />
                        <ButtonHome icon={'itemcalendar.png'} nameButton='Sự kiện' />
                        <ButtonHome icon={'itemmarket.png'} nameButton='Marketplace' />
                        {
                            this.state.showMe ?
                                <>
                                    <ButtonHome icon={'video.png'} nameButton='Video' />
                                    <ButtonHome icon={'chiendichgayquy.png'} nameButton='Chiến dịch gây quỹ' />
                                    <ButtonHome icon={'daluu.png'} nameButton='Đã lưu' />
                                    <ButtonHome icon={'flag.png'} nameButton='Trang' />
                                    <ButtonHome icon={'live.png'} nameButton='Video trực tiếp' />
                                    <ButtonHome icon={'messengernhi.png'} nameButton='Messenger nhí' />
                                </>
                                : null
                        }
                        <div style={profilearea5} className="btn">
                            <table>
                                <tr>
                                    <td>
                                        <img src='down.png' style={profpic1} onClick={() => this.operation()} />
                                    </td>
                                    <td>
                                        <a href="#" onClick={() => this.operation()}> Xem thêm</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <hr></hr>
                        <div className="">
                            <div style={profilearea}>
                                Lối tắt
                        </div>
                            <ButtonHome icon={'fun.png'} nameButton='ReactJS - Việt Nam' />
                            <ButtonHome icon={'fun.png'} nameButton='JsLand (Cộng đồng Javascript lớn nhất Việt Nam)' />
                            <ButtonHome icon={'fun.png'} nameButton='Kỹ Thuật Phần Mềm 3-K12' />
                            <ButtonHome icon={'fun.png'} nameButton='Cộng Đồng Digital Marketing ☑️' />
                            <ButtonHome icon={'fun.png'} nameButton='Đảo mèo' />
                            {
                                this.state.showShortcuts ?
                                    <>
                                        <ButtonHome icon={'video.png'} nameButton='Tuyển dụng nhân sự IT' />
                                        <ButtonHome icon={'chiendichgayquy.png'} nameButton='Hóng biến 24h' />
                                        <ButtonHome icon={'daluu.png'} nameButton='Thời sự 247' />
                                        <ButtonHome icon={'flag.png'} nameButton='Bộ tộc MixiGaming' />
                                    </>
                                    : null
                            }
                            <div style={profilearea5} className="btn">
                                <table>
                                    <tr>
                                        <td>
                                            <img src='down.png' style={profpic1} onClick={() => this.operation1()} />
                                        </td>
                                        <td>
                                            <a href="#" onClick={() => this.operation1()}> Xem thêm</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div >
        );
    }
}

export function ButtonHome(props) {
    return (
        <div style={profilearea5} className="btn">
            <table>
                <tr>
                    <td>
                        <img src={props.icon} style={profpic1} />
                    </td>
                    <td>
                        <a href="#">  {props.nameButton}</a>
                    </td>
                </tr>
            </table>
        </div>
    );
}

const Wrapper = styled.div`
    .btn:hover {
        background-color: #303031;
        color: white;
        width: 95%;
        border-radius: 15px/15px;
    }
    .icon-button {
        --button-size: calc(var(--nav-size) * 0.5);
        width: var(--button-size);
        height: var(--button-size);
        background-color: #484a4d;
        border-radius: 50%;
        padding: 10px;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 300ms;
      }

`
const profilearea5 = {
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: '550',
    fontFamily: 'inherit',
}
const profilearea = {
    marginTop: '10px',
    fontSize: '15px',
    color: 'white',
}
const profpic1 = {
    height: '30px',
    borderRadius: '10px/10px',
}
export default HomeLeft;