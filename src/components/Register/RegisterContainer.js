import React from 'react'
import Header from '../Header/Header'
import LoginService from '../LogIn/LoginService'
import RegisterPage from './RegisterPage'
import RegisterService from './RegisterService'

const RegisterContainer = () => {

    const insertUser = async (name, lastname, contact, address, email, password) => {
        RegisterService.insertUser(name, lastname, contact, address, email, password)
            .then((data) => {
                 LoginService.LoginUser(email, password)
                    .then((data) => {
                        localStorage.setItem("jwtToken", data.data.token)
                        console.log(data.status + " data");
                        localStorage.setItem("role", data.data.role.role)
                        localStorage.setItem("userID", data.data.role.userID)
                        localStorage.setItem("userName", data.data.role.userName + " " + data.data.role.userLastName)
                        localStorage.setItem("status", data.status)
                        return data.status
                    }).catch(function (error) {
                        localStorage.setItem("status", 401)

                        return "error"
                    })
            })
            .catch(function (error) {
                console.log("error " + error)
            })

    }
    return (
        <div>
            <Header />
            <RegisterPage
                insertUser={insertUser}
            />
        </div>
    )
}
export default RegisterContainer