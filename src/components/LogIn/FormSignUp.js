import React from 'react'
import validate from './ValidateInfo'
import validator from 'validator'

import { useState } from 'react'
import { Redirect, useHistory } from "react-router"
import { Modal } from 'react-bootstrap';
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
            window.location.reload();
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
        console.log("clicked")
        e.preventDefault();
        if (values.password === "" || values.email === "" || !validator.isEmail(values.email)) {
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
            <body id="LoginForm" style={{ height: '1000px', paddingTop: "70px" }}>
                <div class="container">
                    <div class="login-form">
                        <div class="main-div">
                            <div class="panel">
                            <h1 class="loginTitle">LOGIN</h1>
                                <p>Please enter your email and password</p>
                            </div>
                            <form id="Login">
                                <div>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email"
                                        value={values.email}
                                        onChange={handleChange} class="form-control" id="inputEmail" placeholder="Email Address" />
                                {<p>{errors.email}</p>}

                                </div>
                                <div class="form-group">
                                    <input type="password" name="password"
                                        value={values.password}
                                        onChange={handleChange} class="form-control" id="inputPassword" placeholder="Password" />
                                {errors.password && <p>{errors.password}</p>}
                                </div>
                                <div class="forgot">
                                    <Link to="register" className="registerBtn">Dont have an account? Register</Link>
                                </div>
                                <button type="submit" onClick={handleSubmit} class="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>


            {/* <Modal show={opened}  onHide={handleShow}>
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
            </form> */}
        </div >)
}

export default FormSignUp
