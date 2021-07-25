import validator from 'validator'
export default function ValidateInfo(values) {
    let errors = {}

    if (!values.name) {
        errors.name = "Name required!"
    }
    if (!values.lastname) {
        errors.lastname = "Lastname required!"
    }
    if (!values.address) {
        errors.address = "Address required!"
    }
    if (!values.contact) {
        errors.contact = "Contact required!"

    }
    if (!values.email) {
        errors.email = "Username required!"

    }
    if (!values.password) {
        errors.password = "Password required!"

    }




    return errors
}