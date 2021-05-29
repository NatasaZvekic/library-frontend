import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { useHistory } from "react-router"
import validator from 'validator'

import { Modal } from 'react-bootstrap';
import LoginContainer from '../LogIn/LoginContainer'
import LoginService from '../LogIn/LoginService'
const RegisterPage = (props) => {
    const [errors, setErrors] = useState({})
    const [opened, setOpened] = useState(false)
    const handleShow = () => setOpened(false);
    let history = useHistory()
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        contact: '',
        address: '',
        email: '',
        password: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (values.name === "" || values.lastname === "" || values.contact === "" || values.email === "" ||
            values.address === "" || values.password === "" ||
            values.name === undefined || values.contact === undefined || values.email === undefined ||
            values.address === undefined || values.password === undefined ||
            values.lastname === undefined || values.password.length < 10 || !validator.isEmail(values.email)) {
            setErrors(validate(values))
        }
        else {
            const res = await props.insertUser(values.name, values.lastname, values.contact, values.address,
                values.email, values.password).then(
                    console.log("done")
                )
            setErrors("")
            console.log("finised..")
           
            if (localStorage.getItem("status") === "200") {
                console.log("200")
                await LoginService.LoginUser(values.email, values.password)
                .then((data) => {
                    console.log(" i do log"  + " " + values.password)
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
                    localStorage.setItem("status", 400)
    
                    return "error"
                })

                history.push("/home")
                setValues({ values: '' })
            }
            else if(localStorage.getItem("status") === "400") { console.log("not 200")
                setOpened(true);
                setTimeout(function () {
                    setOpened(false)
                }, 5000);
                
            }
        }
    }

    return (<div>
        <Modal show={opened} >
            <Modal.Header style={{ background: 'firebrick', color: 'white' }}>Given email alredy exists. Please try again.</Modal.Header>
        </Modal>

        <div className="registerBox" >
            <h1 class="loginTitle">REGISTER</h1>
            <input
                type="text"
                name="name"
                className="inputFiled"
                placeholder="User name"
                defaultValue={values.name}
                onChange={handleChange}
            />
            {<p>{errors.name}</p>}
            <input
                type="text"
                name="lastname"
                placeholder="User last name"
                className="inputFiled"
                defaultValue={values.lastname}
                onChange={handleChange}
            />
            {<p>{errors.lastname}</p>}
            <input
                type="number"
                name="contact"
                className="inputFiled"
                placeholder="User contact"
                defaultValue={values.contact}
                onChange={handleChange}
            />
            {<p>{errors.contact}</p>}
            <input
                type="text"
                name="address"
                className="inputFiled"
                placeholder="User address"
                defaultValue={values.address}
                onChange={handleChange}
            />
            {<p>{errors.address}</p>}
            <input
                type="text"
                name="email"
                className="inputFiled"
                placeholder="User email"
                defaultValue={values.email}
                onChange={handleChange}
            />
            {<p>{errors.email}</p>}
            <input
                type="password"
                name="password"
                className="inputFiled"
                placeholder="User password"
                defaultValue={values.password}
                onChange={handleChange}
            />
            {<p>{errors.password}</p>}
            <button type="submit" onClick={handleSubmit} className="loginBtn">Register</button> <br />
        </div>
    </div>
    )
}

export default RegisterPage


