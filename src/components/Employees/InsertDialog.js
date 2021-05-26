import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        contact: 0,
        email: '',
        ssn: 0,
        role: '',
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
            values.ssn === "" || values.role === "" || values.password === "" ||
            values.name === undefined || values.contact === undefined || values.email === undefined ||
            values.ssn === undefined || values.role === undefined || values.password === undefined ||
            values.lastname === undefined) {
            setErrors(validate(values))
        }
        else {
            props.insertEmployee(values.name, values.lastname,
                values.role, values.email, values.password, values.ssn, values.contact)
            setErrors("")
            setValues({ values: '' })
        }
    }

    const handleClose = () => {
        props.closeAddDialog()
        setErrors("")
        setValues({ values: '' })
    }

    return (
        <Modal
            show={props.showAddDialog}
            backdrop="static"
            keyboard={false} >
            <Modal.Header >
                <Modal.Title>Add new employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    name="name"
                    className="inputFiled"
                    placeholder="Employee name"
                    defaultValue={values.name}
                    onChange={handleChange}
                />
                {<p>{errors.name}</p>}
                <input
                    type="text"
                    name="lastname"
                    placeholder="Employee lastName"
                    className="inputFiled"
                    defaultValue={values.lastname}
                    onChange={handleChange}
                />
                {<p>{errors.lastname}</p>}
                <input
                    type="number"
                    name="contact"
                    className="inputFiled"
                    placeholder="Employee contact"
                    defaultValue={values.contact}
                    onChange={handleChange}
                />
                {<p>{errors.contact}</p>}
                <input
                    type="text"
                    name="email"
                    className="inputFiled"
                    placeholder="Employee email"
                    defaultValue={values.email}
                    onChange={handleChange}
                />
                {<p>{errors.email}</p>}
                <input
                    type="number"
                    name="ssn"
                    className="inputFiled"
                    defaultValue={values.ssn}
                    placeholder="Employee ssn"
                    onChange={handleChange}
                />
                {<p>{errors.ssn}</p>}

                <input
                    type="text"
                    name="role"
                    className="inputFiled"
                    defaultValue={values.role}
                    placeholder="Employee role"
                    onChange={handleChange}
                />
                {<p>{errors.role}</p>}

                <input
                    type="password"
                    name="password"
                    className="inputFiled"
                    placeholder="Employee password"
                    defaultValue={values.password}
                    onChange={handleChange}
                />
                {<p>{errors.password}</p>}

            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleClose}> Close  </Button>
                <Button onClick={handleSubmit} variant="primary">Insert</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InsertDialog


