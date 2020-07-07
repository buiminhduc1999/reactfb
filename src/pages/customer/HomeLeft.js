import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HomeLeft(props) {
    return (
        <div>
            <div className="navigate">
                <Wrapper>
                        <Link href="#">
                    <RowItem style={profilearea5} className="btn">

                            <img src="avata.png" /><span>Đức</span>
                    </RowItem>

                        </Link>
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

const RowItem = styled.div`
  display: flex;
  align-items: center;
`

const profilearea5 = {
    marginTop: '10px',
    background:'red',
    display: 'flex'
}


export default HomeLeft;