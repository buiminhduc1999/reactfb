import React from 'react';
import styled from 'styled-components';

function HomeLeft(props) {
    return (
        <div>
            <div className="navigate">
                <Wrapper>
                    <div style={profilearea5} className="btn">
                        <a href="#"><img src="avata.png" /><span>Đức</span></a>
                    </div>
                    <div style={profilearea5} className="btn">
                        <a href="#"><img src="itemfriend.png" /> Bạn bè</a>
                    </div>
                    <div style={profilearea5} className="btn">
                        <a href="#"><img src="itemmess.png" /> Messager</a>
                    </div>
                    <div style={profilearea5} className="btn">
                        <a href="#"><img src="itemcalendar.png" /> Sự kiện</a>
                    </div>
                    <div style={profilearea5} className="btn">
                        <a href="#"><img src="itemmarket.png" /> Marketplace</a>
                    </div>
                    <hr />
                    <div style={profilearea5} >
                        <a> Lối tắt</a>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}

const Wrapper = styled.div`
    .btn:hover {
    background-color: #303031;
    color: white;
    width: 300px;
  }
  
`
const profilearea5 = {
    marginTop: '10px',
}


export default HomeLeft;