import React, { Component } from 'react';
import styled from 'styled-components';

//Logo image
import IGlogo from '../../photos/iglogo.png';
import Apps from '../../photos/apps.png';

//Styled Components
const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`;

const Form = styled.form`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    background-color: white;
`;

const LogoWrapper = styled.div`
    width: 45%;
`;

const Logo = styled.img`
    width: 100%;
    height: auto;
`;

const Input = styled.input`
    width: 40%;
    height: 8%;
    margin-top: 5px;
    border: none;
    border-bottom: 2px solid #3B96EF;
    &:focus {
        outline: none;
        &::placeholder {
            color: white;
        }
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 3px;
    width: 45%;
    height: 30px;
    margin: 15px 0;
    font-size: 1.4rem;
    color: white;
    background-color: #3B96EF;
    &:hover {
        cursor: pointer;
    }
`;

const AppsImg = styled.a`
    width: 55%;
    margin-top: 4%;
    &:hover {
        cursor: pointer;
    }
`;
//end Styled Components

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    // formInputHandler:
    // set the property on state that matches the event target's name to that target's value
    // Note: this is a flexible way of storing the value of an input in state, 
    // meaning it can be used by any input field (textarea, etc.) as long as there is a property on state that has a matching name
    formInputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // loginHandler:
    // prevent default behavior from the form
    // check if localStorage has a key called 'username', if not then proceed
    // check to make sure a username was input, else alert the user
    // create a key in localStorage that is set to the lowercase equivalent of the username from the form's input
    loginHandler = e => {
        e.preventDefault();
        if(!localStorage.getItem('username')) {
            if(this.state.username) {
                localStorage.setItem('username', this.state.username.toLowerCase());
                localStorage.setItem('password', this.state.password);
                window.location.reload(); //reload the page
            } else {
                alert('Username cannot be empty');
            }
        }
    }

    render() {
        return (
            <LoginWrapper>
                <Form onSubmit={this.loginHandler}>
                    <LogoWrapper>
                        <Logo src={ IGlogo } alt="Instagram logo"/>
                    </LogoWrapper>
                    <Input 
                        className="login-input"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.formInputHandler}
                    />
                    <Input 
                        className="login-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.formInputHandler}
                    />
                    <Button onClick={this.loginHandler}>
                        Login
                    </Button> 
                    <AppsImg href="https://instagram.com" target="_blank">
                        <Logo src={ Apps } alt="App store buttons"/>
                    </AppsImg>
                </Form>
            </LoginWrapper>
        );
    }
}

export default LoginPage;