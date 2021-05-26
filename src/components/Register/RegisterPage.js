import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { useHistory } from "react-router"
import validator from 'validator'

const RegisterPage = (props) => {
    const [errors, setErrors] = useState({})
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

    const handleSubmit = e => {
        e.preventDefault();
        if (values.name === "" || values.lastname === "" || values.contact === "" || values.email === "" ||
            values.address === "" ||  values.password === "" ||
            values.name === undefined || values.contact === undefined || values.email === undefined ||
            values.address === undefined ||  values.password === undefined ||
            values.lastname === undefined || values.password.length < 10  || !validator.isEmail(values.email)) {
            setErrors(validate(values))
        }
        else {console.log("in page")
           const res = props.insertUser(values.name, values.lastname, values.contact, values.address,
                values.email,values.password)
            setErrors("")
            setValues({ values: '' })
            if (localStorage.getItem("status") === "200") {
                history.push("/home")
            }
        }
    }

    return (
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
            <button type="submit" onClick={handleSubmit} className="loginBtn">Register</button> <br/>
        </div>
    )
}

export default RegisterPage


