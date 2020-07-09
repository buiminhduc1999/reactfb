import React from 'react';
import styled from 'styled-components';
import { ButtonHome } from './HomeLeft';
function HomeRight(props) {
    return (
        <>
            <div style={profilearea7} >
                Sinh nhật
				</div>

            <div className="container-1">
                <table>
                    <tr>
                        <td>
                            <img src="happy.png" />
                        </td>
                        <td>
                            <a href="#">Hôm nay là sinh nhật của ABC</a>
                        </td>
                    </tr>
                </table>
            </div>
            <hr></hr>
            <div style={profilearea7} >
                Người liên hệ
            </div>
            <div style={users} >
                <ButtonHome icon={'cat.png'} nameButton='Nguyễn Quốc Anh' />
                <ButtonHome icon={'cat.png'} nameButton='Nguyễn Ngọc Bách' />
                <ButtonHome icon={'cat.png'} nameButton='Bùi Minh Đức' />
                <ButtonHome icon={'cat.png'} nameButton='Nguyễn Quốc Anh' />
                <ButtonHome icon={'cat.png'} nameButton='Ngô Như Hải' />
            </div>
        </>
    );
}


const profilearea7 = {
    alignItems: 'center',
    fontSize: '20px',
    color: '#b0b3b8',
<<<<<<< HEAD
}
const users = {
    alignItems: 'center',
    fontSize: '15px',
    color: '#b0b3b8',
    fontWeight: '15px',
    marginTop: '5px',
=======
>>>>>>> ba81580d237f72cd9382fbfba0d9aebd7971fb55
}
const users = {
    alignItems: 'center',
    fontSize: '15px',
    color: '#b0b3b8',
    fontWeight: '15px',
    marginTop: '5px',
}
export default HomeRight;
