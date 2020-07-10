
import styled from 'styled-components';
import React, { Component, memo } from 'react';
import ButtonHome, { profilearea5, profpic1 } from "./ButtonHome";
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
                        <ButtonHomes posts={
                            [
                                { icon: 'cat.png', nameButton: 'Đức' },
                                { icon: 'itemfriend.png', nameButton: 'Bạn bè' },
                                { icon: 'itemmess.png', nameButton: 'Messager' },
                                { icon: 'itemcalendar.png', nameButton: 'Sự kiện' },
                                { icon: 'itemmarket.png', nameButton: 'Marketplace' },
                            ]
                        } />
                        {
                            this.state.showMe ?
                                <>
                                    <ButtonHomes posts={
                                        [
                                            { icon: 'video.png', nameButton: 'Video' },
                                            { icon: 'chiendichgayquy.png', nameButton: 'Chiến dịch gây quỹ' },
                                            { icon: 'daluu.png', nameButton: 'Đã lưu' },
                                            { icon: 'flag.png', nameButton: 'Trang' },
                                            { icon: 'live.png', nameButton: 'Video trực tiếp' },
                                            { icon: 'messengernhi.png', nameButton: 'Messenger nhí' },
                                        ]
                                    } />
                                </>
                                : null
                        }
                        {
                            this.state.showMe ?
                                <div style={profilearea5} className="btn">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src='downleft.png' style={profpic1} onClick={() => this.operation1()} />
                                            </td>
                                            <td>
                                                <a href="#" onClick={() => this.operation()}> Ẩn bớt</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                :
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
                        }

                        <hr></hr>
                        <div className="">
                            <div style={profilearea}>
                                Lối tắt
                        </div>
                            <ButtonHomes posts={
                                [
                                    { icon: 'fun.png', nameButton: 'Đảo mèo' },
                                    { icon: 'fun.png', nameButton: 'ReactJS - Việt Nam' },
                                    { icon: 'fun.png', nameButton: 'JsLand (Cộng đồng Javascript lớn nhất Việt Nam)' },
                                    { icon: 'fun.png', nameButton: 'Trang tin tức' },
                                    { icon: 'fun.png', nameButton: 'Kỹ Thuật Phần Mềm 3-K12' },
                                ]
                            } />
                            {
                                this.state.showShortcuts ?
                                    <>
                                        <ButtonHomes posts={
                                            [
                                                { icon: 'video.png', nameButton: 'Tuyển dụng nhân sự IT' },
                                                { icon: 'chiendichgayquy.png', nameButton: 'Hóng biến 24h' },
                                                { icon: 'flag.png', nameButton: 'Thời sự 247' },
                                                { icon: 'fun.png', nameButton: 'Bộ tộc MixiGaming' },
                                            ]
                                        } />

                                    </>
                                    : null
                            }
                            {
                                this.state.showShortcuts ?
                                    <div style={profilearea5} className="btn">
                                        <table>
                                            <tr>
                                                <td>
                                                    <img src='downleft.png' style={profpic1} onClick={() => this.operation1()} />
                                                </td>
                                                <td>
                                                    <a href="#" onClick={() => this.operation1()}> Ẩn bớt</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    :
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
                            }

                        </div>
                    </div>
                </Wrapper>
            </div >
        );
    }
}

function ButtonHomes(props) {
    const posts = props.posts;
    const content = posts.map((post) =>
        <ButtonHome icon={post.icon} nameButton={post.nameButton} />
    );
    return (
        <>
            {content}
        </>
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
const profilearea = {
    marginTop: '10px',
    fontSize: '15px',
    color: 'white',
}
export default HomeLeft;