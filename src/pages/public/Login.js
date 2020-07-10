import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import HeaderLogin from './Header';
import Section from './Section';
import Footer from './Footer';

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <HeaderLogin></HeaderLogin>
                </form>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div class="content">
                        <Section></Section>
                    </div>
                </form>
                <Footer></Footer>
            </div>
        );
    }
}

export const Flex = styled.div`
body {
    background: linear-gradient(to bottom right, white, #bcbdc4);
    height: 4000px;
}
@media (min-width: 700px) {
    .container-1 {
        display: flex;
        background: #3b5998;
        color: white;
        margin: 0px;
        align-items: center;
        font-size: 13px;
        }

.container-2{
    display:flex;
    background: #f3f4f8;
    margin: 0px;
    align-items: flex-start;
    height: 1000px;
    /*flex-direction: column;*/
  }
  .container-3{
    display:flex;
    background: white;
    margin: 0px;
    align-items: center;
    flex-direction: column;
  }

}

.container-1 div, .container-2 div, .container-3 div{
  padding:10px;
}


.container-1-box{
   /*flex-basis: 12;*/
}
.container-1-box:nth-of-type(1){
    flex-basis: 10%;
 }
  .container-1-box:nth-of-type(2){
    flex-basis: 45%;
 }
 .container-1-box:nth-of-type(3){
      flex-basis: 16%;
 }
  .container-1-box:nth-of-type(4){
    flex-basis: 16%;
 }

 .container-box:nth-of-type(1){
    flex-basis: 10%;
 }
  .container-box:nth-of-type(2){
    flex-basis: 45%;
 }
 .container-box:nth-of-type(3){
      flex-basis: 15%;
 }
 .form-inline {  
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  
  .form-inline label {
    margin: 5px 10px 5px 0;
  }
  
  .form-inline input {
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  
  .form-inline button {
    padding: 10px 20px;
    background-color: dodgerblue;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
  }
  
  .form-inline button:hover {
    background-color: royalblue;
  }
`
export const button2 = {
    width: '250px',
    height: '50px',
    background: '#6aa656',
    color: 'white',
    fontSize: '20px',
    borderRadius: '10px/10px',
    outline: 'none',
}
const img1 = {
    height: '50px',
}
const form1 = {
    height: '60px',
    fontSize: '15px',
    width: '180px',
}
export const headerbox = {
    width: '150px',
    height: '4px',
    background: 'white',
    padding: '10px',
    fontSize: '15px',
}
export const intro1 = {
    fontFamily: 'verdana',
    fontSize: '25px',
    color: '#142170',
    height: '75px',
    width: '650px',
}
export const intro2 = {
    fontFamily: 'verdana',
    fontSize: '45px',
    color: 'black',
    width: '500px',
    height: '60px',
}
export const intro3 = {
    fontFamily: 'verdana',
    fontSize: '20px',
    color: 'black',
    height: '50px',
    width: '300px',
}
export const img2 = {
    height: '250px',
    width: '550px',
}
export const submit1 = {
    background: '#4267b2',
    color: 'white',
    height: '25px',
    width: '80px',
    fontWeight: 'bold',
}
export const form3 = {
    fontFamily: 'verdana',
    fontSize: '20px',
    color: '#142170',
    width: '500px',
    height: '495px',
}

export const namebox = {
    marginTop: '15px',
    width: '300px',
    height: '20px',
    borderRadius: '5px/5px',
    background: 'white',
    padding: '15px',
    fontSize: '20px',
}

export const form4 = {
    fontSize: '14px',
}

export const form5 = {
    fontSize: '15px',
}

export const selectday = {
    width: '70px',
    height: '30px',
    fontSize: '15px',
}
export const selectmonth = {
    width: '80px',
    height: '30px',
    fontSize: '15px',
}

const footer = {
    width: '930px',
    top: '15px',
    left: '200px',
    color: '#bcbdc4',
    height: '60px',
}

export default Login;