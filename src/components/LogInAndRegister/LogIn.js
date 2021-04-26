import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button } from 'reactstrap'

export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            submited: false,
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit() { console.log("token " + localStorage.getItem("token"))
        if (localStorage.getItem("token") !== null) { 
            console.log("here")
            this.setState({ submited: true });
        }

    }
    render() {
        if (this.state.submited === true) {
            return <Redirect to="/home" />
        }
        return (
            <div className="loginBox">

                <h1 class="loginTitle">LOGIN</h1>
                <input type="text" placeholder="Email" className="textBox" name="username" onChange={this.onChange.bind(this)} />
                <input type="password" placeholder="Password" className="textBox" name="password" onChange={this.onChange.bind(this)} />
                <Button onClick={this.onSubmit.bind(this)} className="loginBtn">Log in</Button>
            </div>
        )
    }
}
