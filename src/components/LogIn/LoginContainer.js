import React from 'react'
import LoginService from './LoginService'
import FormSignUp from './FormSignUp';
import background from '../assets/photo/unnamed.jpg'
import NewHead from '../Header/Header';

const LoginContainer = () => {

    const Login = async (username, password) => {
        await LoginService.LoginUser(username, password)
            .then((data) => {
                localStorage.setItem("jwtToken", data.data.token)
                localStorage.setItem("role", data.data.role.role)
                localStorage.setItem("userID", data.data.role.userID)
                localStorage.setItem("userName", data.data.role.userName + " " + data.data.role.userLastName)
                localStorage.setItem("status", data.status)
                return data.status
            }).catch(function (error) {
                localStorage.setItem("status", 400)
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


