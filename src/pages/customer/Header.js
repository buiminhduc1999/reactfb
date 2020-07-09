import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function HeaderHome() {
  return (
    <div>
      <body>
        <Wrapper>
          <div class="container-1">
            <div id="img3" className="container-1-box">
              <img src="logohomepage.png" />
            </div>
            <div className="container-1-box">
              <input placeholder="         Tìm kiếm trên Facebook" type="text" className="searchbox1" />
            </div>
            <div className="container-1-box">
              <a href="watch.html"><img src="home.png" /></a>
            </div>

            <div className="container-1-box">
              <a href="market.html"><img src="watch.png" /></a>
            </div>

            <div className="container-1-box">
              <a href="group.html"><img src="market.png" /></a>
            </div>

            <div className="container-1-box">
              <a href="facebook.html"><img src="group.png" /></a>
            </div>

            <div className="container-1-box">
              <a href="facebook.html"><img src="game.png" /></a>
            </div>
            <div className="container-1-box">
              <a href="#"><img src="cat.png" style={profpic1} />  </a>
            </div>
            <div className="container-1-box">
              Đức
                        </div>

            <div className="container-1-box">
              <NavItem icon={<PlusIcon />} />
            </div>
            <div className="container-1-box">
              <NavItem icon={<MessengerIcon />} />
            </div>
            <div className="container-1-box">
              <NavItem icon={<BellIcon />} />
            </div>
            <div className="container-1-box">
              <NavItem icon={<CaretIcon />}>
                <Dropdown>
                  <DropDownMenu />
                </Dropdown>
              </NavItem>
            </div>
          </div>
        </Wrapper>
      </body>
    </div>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    </Dropdown>
  )
}
function DropDownMenu() {
  function DropdownItem(props) {
    return (
      <Dropdown>
        <a href='#' className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      </Dropdown>
    )
  }
  return (
    <Dropdown>
      <div className="dropdown">
        <DropdownItem
          leftIcon={<CogIcon />}
          rightIcon={<CogIcon />}
        >
          Settings</DropdownItem>
        <DropdownItem
          leftIcon={<BoltIcon />}
          rightIcon={<BoltIcon />}
        >
          Logout</DropdownItem>
      </div>
    </Dropdown>
  )
}




const Dropdown = styled.div`
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  
  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  
  /* <nav> */
  .navbar {
    height: var(--nav-size);
    background-color: var(--bg);
    padding: 0 1rem;
    border-bottom: var(--border);
  }
  /* <ul> */
  .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  /* <li> */
  .nav-item {
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Icon Button */
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
  
  .icon-button:hover {
    filter: brightness(1.2);
  }
  .icon-button svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
  .dropdown {
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-45%);
    background-color: #242526;
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 5rem;
    overflow: hidden;
    transition: height var(--speed) ease;
}

  .menu {
    width: 100%;
  }
  
  .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
  }
  
  .menu-item .icon-button {
    margin-right: 0.5rem;
  }
  
  .menu-item .icon-button:hover {
    filter: none;
  }
  
  .menu-item:hover {
    background-color: #525357;
  }
  
  .icon-right {
    margin-left: auto;
  }
  
`
const Wrapper = styled.div`
    @media (min-width: 1000px) {
        .container-1{
            display:flex;
            background: #242526;
            color: white;
            align-items: flex-start;
          }
    }

  .container-1 div, .container-2 div, .container-3 div{
    padding:0px;
  }


 .container-1-box{
 	/*flex-basis: 12;*/
  }
  .container-1-box:nth-of-type(1){
  	margin: 2px;
 	flex-basis: 0.5%;
  }
   .container-1-box:nth-of-type(2){
   	margin-top: 5px;
 	flex-basis: 25%;
  }
  .container-1-box:nth-of-type(3){
  	 flex-basis: 5%;
  }
   .container-1-box:nth-of-type(4){
 	flex-basis: 5%;
  }
  .container-1-box:nth-of-type(5){
 	flex-basis: 5%;
  }
  .container-1-box:nth-of-type(6){
      
 	flex-basis: 5%;
  }
  .container-1-box:nth-of-type(7){
      
    flex-basis: 17%;
 }
  .container-1-box:nth-of-type(8){
    margin-top: 11px;
    flex-basis: 1%;
    }
    .container-1-box:nth-of-type(9){
        margin-top: 15px;
        flex-basis: 3.5%;
        }
 .container-1-box:nth-of-type(10){
    margin-top: 5px;
    flex-basis: 3.5%;
    }
 .container-1-box:nth-of-type(11){
    margin-top: 5px;
    flex-basis: 3.5%;
    }
 .container-1-box:nth-of-type(12){
    margin-top: 5px;
    flex-basis: 3.5%;
    }
    .container-1-box:nth-of-type(13){
        margin-top: 5px;
        flex-basis: 3.5%;
    }
  
.searchbox1 {
    font-size: 15px;
    top: 15px;
    width: 250px;
    height: 25px;
    background: #3a3b3c;
    padding: 5px;
    outline: none;
    outline-width: 0;
    border-radius: 20px/20px;
    background-image: url(/public/search.png);
    background-position: 5px;
    background-repeat: no-repeat;
  }
`
const profpic1 = {
  height: '30px',
  borderRadius: '10px/10px',
}
export default HeaderHome;