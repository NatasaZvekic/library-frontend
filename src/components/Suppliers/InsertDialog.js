import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: '',
        contact: 0,
        address: ''
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
        if (values.name === "" || values.contact === 0 || values.address === "") {
            setErrors(validate(values))
        }
        else {
            props.insertSupplier(values.name, values.contact, values.address)
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
                <Modal.Title>Add new supplier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    name="name"
                    placeholder="Company name"
                    className="inputFiled"
                    defaultValue={values.name}
                    onChange={handleChange}
                />
                {<p>{errors.name}</p>}
                <input
                    type="number"
                    name="contact"
                    className="inputFiled"
                    placeholder="Supplier contact"
                    defaultValue={values.contact}
                    onChange={handleChange}
                />
                {<p>{errors.contact}</p>}
                <input
                    type="text"
                    name="address"
                    className="inputFiled"
                    placeholder="Supplier address"
                    defaultValue={values.address}
                    onChange={handleChange}
                />
                {<p>{errors.address}</p>}
            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleClose}> Close  </Button>
                <Button onClick={handleSubmit} variant="primary">Insert</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InsertDialog

