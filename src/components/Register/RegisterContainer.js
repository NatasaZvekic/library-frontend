import React from 'react'
import Header from '../Header/HeaderTwo'
import LoginService from '../LogIn/LoginService'
import RegisterPage from './RegisterPage'
import RegisterService from './RegisterService'

const RegisterContainer = () => {
    const insertUser = async (name, lastname, contact, address, email, password) => {
        await RegisterService.insertUser(name, lastname, contact, address, email, password)
            .then((data) => { console.log("created")
            localStorage.setItem("status", 200)
            //  LoginService.LoginUser(email, password)
            //         .then((data) => {
            //             localStorage.setItem("jwtToken", data.data.token)
            //             console.log(data.status + " data");
            //             localStorage.setItem("role", data.data.role.role)
            //             localStorage.setItem("userID", data.data.role.userID)
            //             localStorage.setItem("userName", data.data.role.userName + " " + data.data.role.userLastName)
            //             localStorage.setItem("status", data.status)
            //             return data.status
            //         }).catch(function (error) {
            //             localStorage.setItem("status", 401)
            //             console.log("error in log" + error)
            //             return "error"
            //         })
            })
            .catch(function (error) {
                console.log("error " + error)
                console.log("not created")
                console.log("open")
                localStorage.setItem("status", 400)


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