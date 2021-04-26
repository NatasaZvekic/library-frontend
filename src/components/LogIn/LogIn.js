import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button } from 'reactstrap'
import LoginContainer from './LoginContainer'

export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            submited: false,
            errors: [],
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit() { console.log("JwtToken " + localStorage.getItem("JwtToken"))
        if (localStorage.getItem("JwtToken") !== null) { 
            console.log("here")
            this.setState({ submited: true });
        }
        if(this.state.username == ""){ console.log("user")
            return this.showValiationErr("username", "username is required!")
        }
        if(this.state.password == ""){ console.log("user")
        return this.showValiationErr("password", "password is required!")
    }

    }
    showValiationErr(elm, msg){
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}]}))
    }
    render() {
        let usernameError = null
        let passwordError = null
        for(let err of this.state.errors){
            if(err.elm == "username"){
                usernameError = err.msg
            }
            else if(err.elm == "password"){
                passwordError = err.msg
            }
        }

        if (this.state.submited === true) {
            return <Redirect to="/home" />
        }
        return (
            <div className="loginBox">
                <h1 class="loginTitle">LOGIN</h1>
               
                <input type="text" placeholder="Email" className="textBox" name="username" onChange={this.onChange.bind(this)} />
                <small className="danger-error">{usernameError ? usernameError : ""}</small>
                <input type="password" placeholder="Password" className="textBox" name="password" onChange={this.onChange.bind(this)} />
                <small className="danger-error">{passwordError ? passwordError : ""}</small>
                <Button onClick={this.onSubmit.bind(this)} className="loginBtn">Log in</Button>
            </div>
        )
    }
}
