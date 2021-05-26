import React from 'react'
import validate from './ValidateInfo'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        genreName: '',
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
        if (values.genreName === "" || values.genreName === undefined) {
            setErrors(validate(values))
        }
        else { 
            props.insertGenre(values.genreName)
            setErrors({})
            setValues({values: ''})
        }
    }

    const handleClose = () => { 
        props.closeAddDialog()
        setErrors({})
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
                <input
                    type="text"
                    placeholder="Genre name"
                    name="genreName"
                    className="inputFiled"
                    defaultValue={values.genreName}
                    onChange={handleChange}   />
                    {<p>{errors.genreName}</p>}
            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleClose}> Close  </Button>
                <Button onClick={handleSubmit} variant="primary">Insert</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InsertDialog

