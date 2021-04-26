import React, { Component } from 'react'
import LoginService from './LoginService'
import FormSignUp from './FormSignUp';
import Example from './Example';


export default class LoginContainer extends Component {

    componentDidMount() {

    }

    Login(username, password) { console.log(" i do log" + username + " " + password)
        LoginService.AddNewBook(username, password)
            .then((data) => { 
                localStorage.setItem("jwtToken", data.data.token)
                console.log(data.status + " data");
                
            }).catch(function (error) {
            })
            
             
    }
    render() {
        return (
            <div>
                <FormSignUp login={this.Login}/>
           
            </div>
        )
    }
}
