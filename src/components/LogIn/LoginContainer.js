import React from 'react'
import { connect } from 'react-redux'
import LoginService from './LoginService'
import FormSignUp from './FormSignUp';
import background from '../assets/photo/unnamed.jpg'
import NewHead from '../Header/Header';

const LoginContainer = () => {

    const Login = async (username, password) => {
        console.log(" i do log" + username + " " + password)
        await LoginService.LoginUser(username, password)
            .then((data) => {
                console.log(" i do log" + username + " " + password)
                localStorage.setItem("jwtToken", data.data.token)
                console.log(data.status + " data");
                localStorage.setItem("role", data.data.role.role)
                localStorage.setItem("userID", data.data.role.userID)
                localStorage.setItem("userName", data.data.role.userName + " " + data.data.role.userLastName)
                 console.log(data.data.role.role + " role") 
                localStorage.setItem("status", data.status)
                return data.status
            }).catch(function (error) {
                console.log("error " + error)
                localStorage.setItem("status", 401)

                return "error"
            })
    }

    return (
        <div className="login" style={{ backgroundImage: `url(${background})` }}>
            <NewHead />
            <FormSignUp login={Login} />

        </div>
    )
}

export default LoginContainer


