import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { useHistory } from "react-router"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginService from '../LogIn/LoginService'

toast.configure()

const RegisterPage = (props) => {
    const [errors, setErrors] = useState({})
    const [opened, setOpened] = useState(false)
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
            values.lastname === undefined || values.password.length < 10) {
            setErrors(validate(values)); console.log("failed")
        }
        else {
            const res = await props.insertUser(values.name, values.lastname, values.contact, values.address,
                values.email, values.password).then(
                )
            setErrors("")
            if (localStorage.getItem("status") === "200") {
                await LoginService.LoginUser(values.email, values.password)
                    .then((data) => {
                        localStorage.setItem("jwtToken", data.data.token)
                        console.log(data.status + " data");
                        localStorage.setItem("role", data.data.role.role)
                        localStorage.setItem("userID", data.data.role.userID)
                        localStorage.setItem("userName", data.data.role.userName + " " + data.data.role.userLastName)
                        localStorage.setItem("status", data.status)
                        return data.status
                    }).catch(function (error) {
                        localStorage.setItem("status", 400)
                        return "error"
                    })

                window.location.reload();
                history.push("/home")
                setValues({ values: '' })
            }
            else if (localStorage.getItem("status") === "400") {
                toast.error("Given username already exist!", { position: toast.POSITION.TOP_CENTER })
                setOpened(true);
                setTimeout(function () {
                    setOpened(false)
                }, 5000);
            }
        }
    }

    return (
        <div>
            <body id="LoginForm" style={{ height: '1000px', paddingTop: "70px" }}>
                <div class="container">
                    <div class="login-form">
                        <div class="main-div">
                            <div class="panel">
                                <h1 class="loginTitle">REGISTER</h1>
                            </div>
                            <form id="Login">
                                <div>
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        placeholder="Name"
                                        defaultValue={values.name}
                                        onChange={handleChange}
                                    />
                                    {<p>{errors.name}</p>}

                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="lastname"
                                        class="form-control"
                                        placeholder="Lastname"
                                        defaultValue={values.lastname}
                                        onChange={handleChange}
                                    />
                                    {errors.lastname && <p>{errors.lastname}</p>}
                                </div>
                                <div class="form-group">
                                    <input
                                        type="number"
                                        name="contact"
                                        class="form-control"
                                        placeholder="User contact"
                                        defaultValue={values.contact}
                                        onChange={handleChange}
                                    />
                                    {errors.contact && <p>{errors.contact}</p>}
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="address"
                                        class="form-control"
                                        placeholder="User address"
                                        defaultValue={values.address}
                                        onChange={handleChange}
                                    />
                                    {<p>{errors.address}</p>}
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    class="form-control"
                                    placeholder="Username"
                                    defaultValue={values.email}
                                    onChange={handleChange}
                                />
                                {<p>{errors.email}</p>}
                                <input
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    placeholder="User password"
                                    defaultValue={values.password}
                                    onChange={handleChange}
                                />
                                {<p>{errors.password}</p>}

                                <button type="submit" onClick={handleSubmit} class="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default RegisterPage


