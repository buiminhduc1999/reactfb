import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { Navbar, NavItem, DropdownMenu } from './Dropdown.js';
import { memo } from "react";
function HeaderHome() {
  return (
    <Wrapper>
      <Dropdown>
        <Navbar>
          <div id="img3" className="container-1-box">
            <img src="logohomepage.png" />
          </div>
          <div className="container-1-box">
            <input placeholder="         Tìm kiếm trên Facebook" type="text" className="searchbox1" />
          </div>

          <ButtonHeader />
          <div className="container-1-box">
            <table>
              <tr>
                <th><img src="cat.png" style={profpic1} /></th>
                <th>Đức</th>
              </tr>
            </table>
          </div>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<MessengerIcon />} />
          <NavItem icon={<BellIcon />} />

          <NavItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
      </Dropdown >
    </Wrapper>
  );
}
function ButtonHeader(props) {
  const posts = [
    { icon: 'home.png' },
    { icon: 'watch.png' },
    { icon: 'market.png' },
    { icon: 'group.png' },
    { icon: 'game.png' },
  ];
  const content = posts.map((post) =>
    <div className="container-1-box">
      <a href="facebook.html"><img src={post.icon} /></a>
    </div>
  );
  return (
    <>
      {content}
    </>
  );
}
const Dropdown = styled.div`
body {
  margin: 0;
  background: #151616;
  font-family: roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

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

/* Top Navigation Bar */

/* <nav> */
  .navbar {
    height: 57px;
    background-color: #242526;
    padding: 0 0rem;
    border-bottom: var(--border);
  }
  /* <ul> */
  .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
  }
  /* <li> */
  .nav-item {
    width: calc(var(--nav-size) * 0.4 );
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
    margin: 4px;
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
    top: 54px;
    width: 300px;
    transform: translateX(-45%);
    background-color: #242526;
    border: 1px;
    border-radius: var(--border-radius);
    padding: 1rem;
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
  
/* CSSTransition classes  */
.menu-primary-enter {
  position: absolute;
  transform: translateX(-110%);
}
.menu-primary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-primary-exit {
  position: absolute;
}
.menu-primary-exit-active {
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}

.menu-secondary-enter {
  transform: translateX(110%);
}
.menu-secondary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-secondary-exit {
}
.menu-secondary-exit-active {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}

`
const Wrapper = styled.div`
    .container-1-box:nth-of-type(1){
      margin-left: 20px;
    flex-basis: 0%;
    }
    .container-1-box:nth-of-type(2){
      margin-top: 5px;
      flex-basis: 26%;
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
        
      flex-basis: 14%;
    }
    .container-1-box:nth-of-type(8){
      color:white;
      flex-basis: 7%;
      margin-top: 7px;
    }
  .searchbox1 {
    font-size: 15px;
    color:white;
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