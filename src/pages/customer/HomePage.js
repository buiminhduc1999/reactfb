import React from 'react';
import Header from './Header';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import styled from 'styled-components';
import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './HomePage.css';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <>
                <Header></Header>
                <Wrapper>
                    <div className="container-2">
                        <div class="container-2-box">
                            <HomeLeft></HomeLeft>
                        </div>
                        <div class="container-2-box">
                            <Main></Main>
                        </div>
                        <div class="container-2-box">
                            <HomeRight></HomeRight>
                        </div>
                    </div>
                </Wrapper>
            </>
        )
    }
}

function Main() {
    return (
        <div>
            <Wrapper>
                <br />
                <br />
                <div className="status">
                    <div className="wrapper2">
                        <div style={img3} >
                            <img src="cat.png" style={profpic2} />
                        </div>
                        <div>
                            <input placeholder="ABC ơi, bạn đang nghĩ gì thế" type="text" style={searchbox2} />
                        </div>
                    </div>
                    <hr />
                    <div className="wrapper">
                        <ButtonPage icon={'stream.png'} nameButton='Video trực tiếp' classname='btnstatus' />
                        <ButtonPage icon={'image.png'} nameButton='Ảnh/Video' classname='btnstatus' />
                        <ButtonPage icon={'icon.png'} nameButton='Cảm xúc/Hoạt động' classname='btnstatus1' />
                    </div>
                </div>
                <div className="room">
                    <div style={profilearea10}>
                        <table>
                            <tr>
                                <td>
                                    <img src="room.png" />
                                </td>
                                <td>
                                    Phòng họp mặt
                                </td>
                                <td>&emsp; &emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
								  <a href="#">Tạo</a></td>
                            </tr>
                        </table>
                    </div>

                    <div style={img30} >
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                        <img src="cat.png" style={profpic20} />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export function ButtonPage(props) {

    return (
        <div style={profilearea6} className={props.classname}>
            <table>
                <tr>
                    <td>
                        <img src={props.icon} />
                    </td>
                    <td>
                        <a href={props.nameButton}>Video trực tiếp</a>
                    </td>
                </tr>
            </table>
        </div>
    );
}



const Wrapper = styled.div`

@media (min-width: 1000px) {
    .container-2 {
        display: flex;
        background: #ff7f27;
        flex-direction: row;
        height: 100%;
    }
}
.container-2 div {
    padding: 5px;
}
.container-2-box:nth-of-type(1) {
    background-color: #18191a;
    flex-basis: 24%;
}
.container-2-box:nth-of-type(2) {
    flex-basis: 55%;
}
.container-2-box:nth-of-type(3) {
    flex-basis: 22%;
    background-color: #18191a;
}

.status {
    background-color: #242526;
	width: 500px;
	height: 140px;
	margin-top: 50px;
	margin-bottom: 20px;
	margin-left: 95px;
	border-radius: 15px/15px;
  }
  .wrapper2 {
    margin-left: 8px;
    display: grid;
    grid-template-columns: 50px 50px;
    font-size: 12px;
  }
  .wrapper {
    margin-left: 0px;
    display: grid;
    grid-template-columns: 170px 150px 170px;
  }
  .btnstatus:hover {
	background-color: #303031;
  	width: 150px;
  	border-radius: 10px/10px;
  }

.btnstatus1:hover {
    background-color: #303031;
    color: white;
    width: 165px;
    border-radius: 10px/10px;
  }
    .wrapper {
        margin - left: 10px;
        display: grid;
        grid-template-columns: 170px 150px 170px;
  }
.status {
    background-color: #242526;
	width: 500px;
	height: 140px;
	margin-top: 50px;
	margin-bottom: 20px;
	margin-left: 95px;
	border-radius: 15px/15px;
}
.room{
	background-color: #242526;
	width: 500px;
	height: 90px;
	margin-top: 0px;
	margin-bottom: 10px;
	margin-left: 95px;
	border-radius: 15px/15px;
}

/*ahuhu*/
  tr:hover {
      background-color:#303031;
    } 
`
const searchbox2 = {
    marginTop: '5px',
    fontSize: '15px',
    width: '400px',
    height: '25px',
    background: '#3a3b3c',
    padding: '5px',
    outline: 'none',
    outlineWidth: '0',
    borderRadius: '20px/20px',
    backgroundPosition: '5px',
    backgroundRepeat: 'no-repeat',
}
const img3 = {
    height: '50px',
}
const profilearea6 = {
    fontSize: '13px',
    color: '#b0b3b8',
}
const profpic2 = {
    marginTop: '5px',
    height: '40px',
    borderRadius: '20px/20px',
}
const profilearea10 = {
    fontSize: '15px',
    color: '#b0b3b8',
}
const img30 = {
    margin: '5px',
    height: '50px',
}

const profpic20 = {
    marginTop: '-5px',
    marginLeft: '10px',
    height: '40px',
    borderRadius: '20px/20px',
}