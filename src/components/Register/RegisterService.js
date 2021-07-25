import axios from 'axios'
import LoginService from '../LogIn/LoginService'
import { useHistory } from "react-router"

const RegisterService = {

    insertUser: (name, lastname, contact, address, email, password) => { console.log("in service")
        const newUser = {
            name: name,
            userLastName: lastname,
            userContact: Number(contact),
            userAddress: address,
            password: password,
            username: email,
    
        }

        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",

        }
        return axios.post("http://localhost:44324/users", newUser, {
            headers: header
    
        })
    },
}

export default RegisterService
