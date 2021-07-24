import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        yearOfBirth: ''
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
        if (values.name === "" || values.lastname === "" || values.yearOfBirth === "") {
            setErrors(validate(values))
        }
        else {
            props.insertAuthor(values.name, values.lastname, values.yearOfBirth)
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
                <Modal.Title>Add new genre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Author name"
                        defaultValue={values.name}
                        onChange={handleChange}
                    />
                    {<p>{errors.name}</p>}
                </div>
                <div class="form-group">
                    <input
                        class="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Author lastname"
                        defaultValue={values.lastname}
                        onChange={handleChange}
                    />
                    {<p>{errors.lastname}</p>}

                </div>
                <div class="form-group">
                    <input
                        type="number"
                        name="yearOfBirth"
                        class="form-control"
                        placeholder="Author year of birth"
                        defaultValue={values.yearOfBirth}
                        onChange={handleChange}
                    />
                    {<p>{errors.yearOfBirth}</p>}
                </div>
            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleClose}> Close  </Button>
                <Button onClick={handleSubmit} variant="secondary" style={{backgroundColor: '#f0ad4e', borderColor: '#f0ad4e'}}>Insert</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InsertDialog

