import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        contact: '',
        address: '',
        role: '',
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
            values.address === "" || values.role === "" || values.password === "" ||
            values.name === undefined || values.contact === undefined || values.email === undefined ||
            values.address === undefined || values.role === undefined || values.password === undefined ||
            values.lastname === undefined) {
            setErrors(validate(values))
        }
        else {
            props.insertUser(values.name, values.lastname, values.contact, values.address,
                values.email, values.role, values.password)
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
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="form-group">
                    <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="User name"
                        defaultValue={values.name}
                        onChange={handleChange}
                    />
                    {<p>{errors.name}</p>}
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        name="lastname"
                        placeholder="User last name"
                        class="form-control"
                        defaultValue={values.lastname}
                        onChange={handleChange}
                    />
                    {<p>{errors.lastname}</p>}
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
                    {<p>{errors.contact}</p>}
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
                <div class="form-group">
                    <input
                        type="text"
                        name="email"
                        class="form-control"
                        placeholder="User email"
                        defaultValue={values.email}
                        onChange={handleChange}
                    />
                    {<p>{errors.email}</p>}
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        name="role"
                        class="form-control"
                        defaultValue={values.role}
                        placeholder="User role"
                        onChange={handleChange}
                    />
                    {<p>{errors.role}</p>}
                </div>
                <div class="form-group">
                    <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="User password"
                        defaultValue={values.password}
                        onChange={handleChange}
                    />
                    {<p>{errors.password}</p>}
                </div>
            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleClose}> Close  </Button>
                <Button onClick={handleSubmit} variant="secondary" style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}>Insert</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InsertDialog


