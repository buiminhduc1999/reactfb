import React from 'react';
import styled from 'styled-components';
function HomeRight(props) {
    return (
        <div>
            <Wrapper>
                <div className="sidebar">
                    <div className="containersidebar">
                        <div style={profilearea6} >
                            <a href="#">Sinh nhật</a>
                        </div>
                        <div>
                            <a href="#"><img src="happy.png" /> Hôm nay là sinh nhật của ABC</a>
                        </div>
                    </div>
                    <hr />
                    <div className="containersidebar">
                        <div style={profilearea6} >
                            <a href="#">Người liên hệ</a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
const Wrapper = styled.div`
    .sidebar {
    position: fixed;
    background-color: #18191a;
    width: 325px;
    height: 100%;
    top: 60px;
    left: 1025px;
    z-index: 7;
  }
  #containersidebar {
    display: flex;
    flex-basis: 20px;
    margin-left: 10px;
  }
`
const profilearea6 = {
    fontSize: '20px',
    color: '#b0b3b8',
    marginTop: '20px',
}
export default HomeRight;