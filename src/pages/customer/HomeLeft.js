import React from 'react';
import styled, { withTheme } from 'styled-components';

function HomeLeft(props) {
    return (
        <div>
            <Wrapper>

                <div class="container-2-box">
                    <ButtonHome icon={'cat.png'} nameButton='Đức' />
                    <ButtonHome icon={'itemfriend.png'} nameButton='Bạn bè' />
                    <ButtonHome icon={'itemmess.png'} nameButton='Messager' />
                    <ButtonHome icon={'itemcalendar.png'} nameButton='Sự kiện' />
                    <ButtonHome icon={'itemmarket.png'} nameButton='Marketplace' />
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
                    </div>
                </div>
            </Wrapper>
        </div>
    );
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
