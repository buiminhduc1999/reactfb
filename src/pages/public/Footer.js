import React from 'react';
import styled from 'styled-components';
function Footer() {
    return (
        <>
            <Wrapper>
                <div class="bodyfooter">
                    <div style={footer} class="bodyfooter">
                        Tiếng Việt
                    <a href="#"> English (UK)</a>
                        <a href="#">中文(台灣)</a>
                        <a href="#">日本語</a>
                        <a href="#">한국어</a>
                        <a href="#">ภาษาไทย</a>
                        <a href="#">Français (France)</a>
                        <a href="#">Español</a>
                        <a href="#">Português (Brasil)</a>
                        <a href="#">Deutsch</a>
                        <a href="#">Italiano</a>
                        <br /><hr />Leran more......
                </div>
                </div>
            </Wrapper>
        </>
    );
}
const footer = {
    width: '930px',
    top: '15px',
    left: '200px',
    color: '#bcbdc4',
    height: '60px',
}
const Wrapper = styled.div`
.bodyfooter{
    position:absolute;
    left:0;
    top:920px;
    width:100%;
    height:80px;
    background:white;
    }
`
export default Footer;