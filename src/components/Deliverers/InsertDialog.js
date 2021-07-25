import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: '',
        contact: '',
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
        if (values.name === "" || values.contact === "" || values.address === "" || values.name === undefined || values.contact === undefined || values.address === undefined) {
            setErrors(validate(values))
        }
        else {
            props.insertDeliverer(values.name, values.address, values.contact)
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
                <div class="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Company name"
                        className="form-control"
                        defaultValue={values.name}
                        onChange={handleChange}
                    />
                    {<p>{errors.name}</p>}
                </div>
                <div class="form-group">
                    <input
                        type="number"
                        name="contact"
                        className="form-control"
                        placeholder="Supplier contact"
                        defaultValue={values.contact}
                        onChange={handleChange}
                    />
                    {<p>{errors.contact}</p>}
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Supplier address"
                        defaultValue={values.address}
                        onChange={handleChange}
                    />
                    {<p>{errors.address}</p>}
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

