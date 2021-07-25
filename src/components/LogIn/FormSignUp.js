import React from 'react'
import validate from './ValidateInfo'
import validator from 'validator'
import { useState } from 'react'
import { useHistory } from "react-router"
import { Link } from 'react-router-dom';

const FormSignUp = (props) => {
    const [errors, setErrors] = useState({})
    let history = useHistory()
    const [values, setValues] = useState({
        email: "",
        password: ''
    })
    const [show, setShow] = useState(false);
    const [opened, setOpened] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const fetchUserEmail = async () => {
        const response = await props.login(values.email, values.password)
        if (localStorage.getItem("status") === "200") {
            window.location.reload();
            history.push("/home")
        }
        else {
            setOpened(true);
            setTimeout(function () {
                setOpened(false)
            }, 5000);

        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (values.password === "" || values.email === "" || !validator.isEmail(values.email)) {
            console.log("erros")
            setErrors(validate(values))

        }
        else {
            fetchUserEmail()
            setErrors("")
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
                                <p>Please enter your username and password</p>
                            </div>
                            <form id="Login">
                                <div>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email"
                                        value={values.email}
                                        onChange={handleChange} class="form-control" id="inputEmail" placeholder="Username" />
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
        </div >)
}

export default FormSignUp
