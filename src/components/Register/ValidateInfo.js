import validator from 'validator'
export default function ValidateInfo(values) {
    let errors = {}

    if (!values.name) {
        errors.name = "Employee name required!"
    }
    if (!values.lastname) {
        errors.lastname = "Employee lastname required!"
    }
    if (!values.address) {
        errors.address = "Employee address required!"
    }
    if (!values.contact) {
        errors.contact = "Contact required!"

    }
    if(values.password.length !== undefined){
    if (values.password.length < 10) { console.log("pass " + values.password)
        errors.password = "Password must be at least 8 characters long!"
    }

    }
    if (!validator.isEmail(values.email)) {
        errors.email = "Email required!"
    }
    



    return errors
}