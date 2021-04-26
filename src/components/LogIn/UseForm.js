import {useState, useEffect} from 'react'

const UseForm = validate =>{
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value } = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    const handleSubmit = e =>{ console.log("submited")
        e.preventDefault()

        setErrors(validate(values))
    }

    return {handleChange, values, handleSubmit, errors}
}

export default UseForm