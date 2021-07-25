import React from 'react'
import Header from '../Header/HeaderTwo'
import RegisterPage from './RegisterPage'
import RegisterService from './RegisterService'

const RegisterContainer = () => {
    const insertUser = async (name, lastname, contact, address, email, password) => {
        await RegisterService.insertUser(name, lastname, contact, address, email, password)
            .then((data) => {
                console.log("created")
                localStorage.setItem("status", 200)
            })
            .catch(function (error) {
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