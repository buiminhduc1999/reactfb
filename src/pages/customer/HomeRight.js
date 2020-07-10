import React from 'react';
import ButtonHome from "./ButtonHome";

const profilearea7 = {
    alignItems: 'center',
    fontSize: '20px',
    color: '#b0b3b8',
}
const users = {
    alignItems: 'center',
    fontSize: '15px',
    color: '#b0b3b8',
    fontWeight: '15px',
    marginTop: '5px',
}

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
                <ButtonHome icon={'avatar.jpg'} nameButton='Nguyễn Quốc Anh' />
                <ButtonHome icon={'avatar.jpg'} nameButton='Nguyễn Ngọc Bách' />
                <ButtonHome icon={'avatar.jpg'} nameButton='Bùi Minh Đức' />
                <ButtonHome icon={'avatar.jpg'} nameButton='Nguyễn Quốc Anh' />
                <ButtonHome icon={'avatar.jpg'} nameButton='Ngô Như Hải' />
            </div>
        </>
    );
}

export default HomeRight;
