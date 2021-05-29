import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Redirect, useHistory } from "react-router"
import {  Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormSignUp = (props) => {
    const [errors, setErrors] = useState({})
    let history = useHistory()
    const [values, setValues] = useState({
        email: "",
        password: ''
    })
    const [show, setShow] = useState(false);
    const handleShow = () => setOpened(false);
    const [opened, setOpened] = useState(false)
    const handleClose = () => setShow(false);
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
 
    const fetchUserEmail = async () => {
        const response = await props.login(values.email, values.password)
        console.log("res " + localStorage.getItem("status"))
        if (localStorage.getItem("status") === "200") {
         
           history.push("/home")
        }
        else {
            console.log("open")
            setOpened(true);
            setTimeout(function () {

               setOpened(false)

            }, 5000);

        }
      };

     const handleSubmit = e => {
        e.preventDefault();
        if (values.password === "" || values.email === "") {
            console.log("erros")
            setErrors(validate(values))
        }
        else {
            fetchUserEmail()
            setErrors("")
            // props.login(values.email, values.password).then(()=>{console.log("sm")})
            // console.log("token " + localStorage.getItem("jwtToken"))
           
        }
    }

    return (
        <div>
            <Modal show={opened}  onHide={handleShow}>
                <Modal.Header style={{ background: 'firebrick', color:'white'}}>Your email or password is invalid. Please try again.</Modal.Header>
            </Modal>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1 class="loginTitle">LOGIN</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className="textBox"
                    name="email"
                    value={values.email}
                    onChange={handleChange} />
                {<p>{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    className="textBox"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                <button type="submit" className="loginBtn">Log in</button> <br/>
                <Link to="register" className="registerBtn">Dont have an account? Register</Link>
            </form>
        </div>)
}

export default FormSignUp
